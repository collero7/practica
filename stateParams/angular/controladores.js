var app = angular.module('promesaApp.controladores', []);

app.controller('mainCtrl', ['$scope', '$q', function($scope, $q){

	$scope.miVar = 0;

	$scope.sumar = function( num ){

		var q = $q.defer();
		var valido = true;

		num ++;
		
		setTimeout(function(){

			if(true){

				q.resolve(num);
			}
			else{
				q.reject("Se ha producido un error");
			}

		}, 2000);
			
		return q.promise;
	}


	$scope.promise = $scope.sumar(1);

	$scope.promise.then(
		function(valor){
			console.log("Promesa cumplida");
			$scope.miVar = valor;
		},
		function(error){
			console.error("Errorrr")
		});

//--------------------------------------

	$scope.restar = function(num){

		var q = $q.defer();
		let valido = true;

		num --;

		setTimeout(function(){

			if(valido){
				q.resolve(num);
			}
			else{
				q.reject("Se ha producido un error en la resta");
			}

		}), 3000;
	
		return q.promise;
	}

	$scope.miPromesa = $scope.restar(15);

	$scope.miPromesa.then(

		function(valor){
			console.log("Promesa de resta cumplida");
			$scope.miResta = valor;
		},
		function(valor){
			console.log("Ha ocurrido algo en la resta");
		}
	);






	///////////////////////////////// Prueba Date /////////////////////////////////////

	var dia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

	$scope.miNumero = 4;
	$scope.fecha = new Date('March 14, 2019 13:15:00');
	$scope.dia = $scope.fecha.getDate();
	$scope.mes = $scope.fecha.getMonth();
	$scope.anio = $scope.fecha.getFullYear();
	$scope.diaSemana = dia[$scope.fecha.getDay()];

	if( $scope.diaSemana === "Viernes" ){
		$scope.fecha.setDate($scope.fecha.getDate() + 3);
		$scope.concatena = "Hoy es " + $scope.fecha.getDate() + "/" + ($scope.fecha.getMonth()+1) + "/" + $scope.fecha.getFullYear() + ", y el día de la semana es " + dia[$scope.fecha.getDay()];
	}else{
		$scope.concatena = "Hoy es " + $scope.dia + "/" + ($scope.mes+1) + "/" + $scope.anio + ", y el día de la semana es " + $scope.diaSemana;		
	}



}]);

///////////////////////////////// Prueba Arrays /////////////////////////////////////

app.controller('variosCtrl', ['$scope', 'Servicios',  function($scope, Servicios){
	
	$scope.miArray = [2, 6, 1, 7, 4];

	$scope.resultado = Servicios.getMap($scope.miArray);

	console.log($scope.resultado, 3);


}]);