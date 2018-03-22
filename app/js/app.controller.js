/*
	Map Controller
*/
app.
	controller('AppController', function($rootScope, $route,$location, AppService){
		
		var vm = this;
		vm.title = '';

		$location.path('/dashboard');

		$rootScope.$on("$locationChangeStart", function(event, next, current) { 
			console.log(event);
		});

		$rootScope.$on('$viewContentLoaded', function(event, viewName, viewContent){
			vm.title = event.targetScope.vm.title;
		});
	})