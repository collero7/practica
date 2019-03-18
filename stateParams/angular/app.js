var app = angular.module('promesaApp', ['promesaApp.controladores', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

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
		.state('usuarios.listado',
		 {
		 	url: '/all',
		 	template: '<ul><li>Cristopher</li><li>Paco</li><li>Manolo</li></ul>'
		 });
		
}])