var app = angular.module('promesaApp', ['promesaApp.controladores', 'promesaApp.tablaCtrl', 'promesaApp.servicios', 'promesaApp.JavaScriptCtrl', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/main');

	$stateProvider
		.state('main',
		 {
		 	url: '/main',
		 	template: '<h2>Saludo al menú principal</h2><p>Este es un parrafo sencillo</p>'
		 })
		.state('usuarios',
		 {
		 	url: '/users',
		 	template: '<h2>Modificacion de usuarios</h2><a ui-sref="usuarios.listado">Mostrar listado de usuarios</a><div ui-view></div>'
		 })
		.state('pruebas',
		 {
		 	url: '/pruebas',
		 	templateUrl: 'html/pruebas.html'
		 })
		.state('tabla',
		 {
		 	url: '/tabla',
		 	controller: 'tablaCtrl',
		 	templateUrl: 'html/tabla.html'
		 })
		.state('javascript',
		 {
		 	url: '/javascript',
		 	controller: 'JavaScriptCtrl',
		 	templateUrl: 'html/javascript.html',
		 	params: {
				id: null
		 	}
		 })
		.state('wem',
		 {
		 	url: '/wem',
		 	controller: 'textosWEMCtrl',
		 	templateUrl: 'html/wem.html'
		 })
		.state('promesas2',
		 {
		 	url: '/promesas2',
		 	controller: 'Promesas2Ctrl',
		 	templateUrl: 'html/promesas2.html'
		 })
		.state('usuarios.listado',
		 {
		 	url: '/all',
		 	template: '<ul><li>Cristopher</li><li>Paco</li><li>Manolo</li></ul>'
		 });
		
}])