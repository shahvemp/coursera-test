

var check  = angular.module('Food', ["ngRoute"]) ;
  check.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
        templateUrl: 'view/count.html', 
        controller:  'CountCtlr',
        }) ;
        }]);// onclick this has to cm t view