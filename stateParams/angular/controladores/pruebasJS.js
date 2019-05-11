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


	/*

	var arr = [5, 7, 3, 6, 1]; 

	console.log(arr);

	arr.sort();

	console.log(arr);

	arr.reverse();

	console.log(arr);

	arr = arr.map(function(param){
		param *= param;
		return param;	
	});

	console.log(arr);

	arr = arr.map(Math.sqrt);

	console.log(arr);

	arr = arr.join('|');

	console.log(arr);

	arr = arr.split('|');

	console.log(arr);

	arr.push("10");

	console.log(arr);

	arr.unshift("0");

	console.log(arr);

	arr.splice(0, 1);

	console.log(arr);

	arr.slice(0, 1);

	console.log(arr);

	*/


	////////////////// -- Sobrecarga de operadores -- //////////////////


	/*

	function crearProducto(nombre, precio){

		nombre = nombre || "sin nombre";
		precio = precio || 0;

		console.log("Nombre: " + nombre + ", Precio: " + precio);

	}

	function crearProducto100(nombre){
		nombre = nombre || "sin nombre";

		crearProducto(nombre, 100);
	}


	crearProducto();
	crearProducto("Tomates", 1.30);
	crearProducto100("boli");

	*/


	////////////////// -- Polimorfismo -- //////////////////


	





}]);