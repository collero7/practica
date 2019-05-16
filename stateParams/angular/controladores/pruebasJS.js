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

	/*

	function determinarDato(valor){

		console.log("El valor introducido es: ", valor);

		if( valor === undefined ){
			console.log(valor, " es un dato indefinido");
		}

		if( typeof valor === "number" ){
			console.log(valor, " es un dato numérico");
		}

		if( typeof valor === "string" ){
			console.log(valor, " es un dato texto");
		}

		if( typeof valor === "object" ){
			console.log(valor, " es un dato objeto");

			if( valor instanceof Number ){
				console.log(valor, " es ua instancia de un número");
			}
		}

	}


	var miVar = new Number (6);
	var miVar2 = 6;

	determinarDato(miVar);
	
	
	*/






	////////////////// -- Funciones y su contexto -- //////////////////

	/*

	function crearFunciones(){

		var arr = [];
		var num = 1;
	
		for(num = 1; num <= 3; num++){
	
			arr.push(
					(function(num){
						return function(){
							console.log(num);
						}
					})(num)
				);
		}

		return arr;
	}

	var miArray = crearFunciones();

	miArray[0]();
	miArray[1]();
	miArray[2]();

	
	*/





	////////////////// -- Funciones y su contexto -- //////////////////


	/*

	var num = 80.2342376;
	var num1 = new Number(8);

	console.log(num);
	console.log(num1);

	console.log(num.toFixed(3));
	console.log(num.toPrecision(3));

	var num2 = new Number("7");
	console.log(num2);
	console.log(num2.valueOf());

	*/




	////////////////// -- Objeto String -- //////////////////


	/*

	var miNombre = "Cristopher Ollero Ortiz";

	console.log(miNombre);

	console.log(miNombre.toUpperCase());
	console.log(miNombre.toLowerCase());

	console.log(miNombre.indexOf("ph"));
	console.log(miNombre.lastIndexOf("ph"));

	console.log(miNombre.substr(0, miNombre.indexOf("ro Ortiz")));

	 console.log(miNombre.split());

	 var split = miNombre.split(" ");
	 console.log(split);

	*/




	////////////////// -- Puertas lógicas -- //////////////////

	var pin = "fdhhd2154";
	var repitePin = "2154";

	var pin1 = parseInt(pin);
	var pin2 = parseInt(repitePin);

	//Sentencia de control sobre puertas lógicas
	if((pin1 === undefined || pin2 === undefined) || (pin.length !== 4 || repitePin.length !== 4) || (pin1 !== pin2) || ( pin1 === NaN || pin2 === NaN )){
		console.log("Introduce un código PIN correcto, Vanezaaaa!!");
	}
	else{
		console.log("Bien Vanezaaaa!!, eres mu lista!");
	}






	////////////////// -- Operaciones con fechas -- //////////////////


}]);