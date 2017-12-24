

check.controller ('CountCtlr' ,['$scope',"$http" ,function ($scope){
$scope.checkInput = function () {
var count=0;
var bool =true ;
$scope.message="";
		console.log($scope.dataCheck.split(','));
		var foodItems= $scope.dataCheck.split(',');
		console.log($scope.dataCheck.split(',').length); 		// split function with lenght output 
		angular.forEach(foodItems, function(value) {

console.log(value);  						// 1)if input is ' ' or ,  enter invalid input case
if(value == ''){
	$scope.message ="enter valid item";
	bool = false;

}
else{
	count = count+1;

}
		})


if(bool){




		if(count >3 ){							//2) input value >3 case

$scope.message="too much";
		}
		if(count <= 3 ){						//3) input value < or = 3 case

$scope.message="enjoy";
		}
// 		if(count <3 ){

// $scope.message="add";
// 		}
	}
	}
}] );