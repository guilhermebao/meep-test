/*
	Map Controller
*/
app.
	controller('DashboardController', function($route,$location, AppService){
		
		var vm = this;
		vm.title = "Dashboard";

		AppService.getInfo()
			.then(function(data){
				console.log(data);
				vm.orders = data;

				console.log(vm.orders);
			})
			.then(function(err){

			})

	})