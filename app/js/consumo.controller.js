/*
	Map Controller
*/
app.
	controller('ConsumoController', function($route,$location, AppService){
		
		var vm = this;
		vm.title = "Consumo";

		AppService.getInfo()
			.then(function(data){
				console.log(data);
				vm.orders = data;

				console.log(vm.orders);
			})
			.then(function(err){

			})

	})