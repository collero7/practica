var app = angular.module('promesaApp.JavaScriptCtrl', []);

app.controller('JavaScriptCtrl', ['$scope', '$q', '$http', '$state', function($scope, $q, $http, $state){

	$scope.prueba = 'Prácticas de JavaScript';

	//Probando el envío de información entre vistas
	$scope.miId = $state.params.id; //Recogemos el parámetro que hemos pasado con $state.go y definido en el stado con Params: {}



	//////////////////////////////////////////////////////////////// --- //////////////////////////////////////////////////////////////////



	////////////////// -- Creando un objeto y mostrandolo -- //////////////////

	/*

	function persona(){
		this.nombre = "Cristopher";
		this.apellidos = "Ollero Ortiz";
	}

	var perso = new persona();

	console.log(perso);

	*/





	////////////////// -- Validando si es un tipo de objeto u otro -- //////////////////

	/*

	function Persona1(){
		this.nombre = "Cristopher";
	}

	function Persona2(){
		this.nombre = "Cristopher";
	}

	function validarTipo(parametro){

		//Para comprobar que tipo de parametro hemos recibido
		console.log("Es de tipo", typeof parametro);

		if(parametro instanceof Persona1){
			console.log("Este objeto es una instancia de Persona1");
		}
		else{
			console.log("Este objeto NO es una instancia de Persona1");
		}

	}


	var perso1 = new Persona1();
	var perso2 = new Persona2();
	var miNumero = 2;

	validarTipo(perso1);
	validarTipo(perso2);
	validarTipo(miNumero);

	*/






	////////////////// -- Trabajando con Arrays -- //////////////////














}]);