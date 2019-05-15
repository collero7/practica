var app = angular.module('promesaApp.servicios', []);

app.factory('Servicios', ['$q', function($q){
	
	function multiplicarNumero(num){
		return num * 2;
	}

	var self = {

		getMap: function(array){
			return array.map(multiplicarNumero);
		},

		getTextosWEM: function(textoId){
			var textos = [
			{
				textoId: 'tituloDelTextoWem',
				contenido: 'Hola soy el titulo'
			},
			{
				textoId: 'cuerpoDelTextoWem',
				contenido: 'Hola soy el cuerpo'
			},
			{
				textoId: 'pieDelTextoWem',
				contenido: 'Hola soy el pie'
			}];

			for(var i = 0; i < textos.length; i++){

				if(textos[i].textoId === textoId){
					return textos[i].contenido;
				}
			}
		},

		getNombreApellidos: function(nombre, apellidos){

			return {miNombre: nombre, misApellidos: apellidos};
		}

	}

	return self;

}]);