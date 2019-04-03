var app = angular.module('promesaApp.servicios', []);

app.factory('Servicios', ['$q', function($q){
	
	function multiplicarNumero(num){
		return num * 2;
	}

	var self = {

		getMap: function(array){
			return array.map(multiplicarNumero);
		}

	}

	return self;

}]);