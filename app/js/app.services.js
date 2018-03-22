/*
	Map Services
*/

app
	.factory('AppService', function($http, $q){

		var apiPostmon = "./data/data.json";

		var getInfo = function(address){
		
			return $q(function(resolve, reject){
				$http.get(apiPostmon)
						.then(
							function(result){
								if(result.data){
									resolve(result.data);
								}else{
									reject(reject.data);
								}
							},
							function(err){
								reject(err);
							}
						)
			});
			
			
		}

		return {
			getInfo: getInfo
		}
	})