var ToBuy = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];
angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);


// populating the view with items
ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope,$index) {
  
  $scope.ToBuy=ToBuy;
   $scope.boughtlist=[];
// adding items to list

$scope.addItem=function () {
  var newitem={
    name: $scope.newitemname,
    quantity:$scope.newitemquantity
  };
  $scope.ToBuy.push(newitem);
  // body...
};
//removing item if already bought
$scope.bought= function (index) {
var boughtitem = $scope.ToBuy[index];
console.log(boughtitem);
 ToBuy.splice(index, 1); 
  $scope.boughtlist.push(boughtitem);
 

}
}
