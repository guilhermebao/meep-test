/*
	Avenue Code - Main Module
*/
var app = angular
				.module('app', ['ngRoute', 'ngAnimate'])
				
				.config(function($routeProvider){
					$routeProvider
						.when("/conta", {
							name: 'Conta',
							templateUrl : "./templates/conta.html", 
							controller: 'ContaController', 
							controllerAs: 'vm'
						})
						.when("/dashboard", {
							name: 'Dashboard',
							templateUrl : "./templates/dashboard.html",
							controller: 'DashboardController', 
							controllerAs: 'vm'
						})
						.when("/consumo", {
							name: 'Consumo',
							templateUrl : "./templates/consumo.html",
							controller: 'ConsumoController', 
							controllerAs: 'vm'
						})
						.otherwise({
							templateUrl : "./templates/dashboard.html"
						});
				})
				