var app = angular.module('promesaApp.tablaCtrl', []);

app.controller('tablaCtrl', ['$scope', '$q', '$http', function($scope, $q, $http){

	$scope.resultadoPeliculas = {};
	$scope.titu = '';


	$scope.buscar = function(){

		$http.get('http://www.omdbapi.com/?s=' + encodeURI($scope.titu) + '&page=1&apikey=f1480960')
		.then(function(datos){

			$scope.resultadoPeliculas = datos.data.Search;

		});
	}

	
}]);