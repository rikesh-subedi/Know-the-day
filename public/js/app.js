'use strict';
angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers',
    'myApp.restServices',
    ],function($httpProvider){
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}).
directive('hiddenRepeat',function($parse){
  return {
    link: function(scope, elem, attr){
      var data = $parse(attr.hiddenRepeat)(scope);
      if(data){
        for (var i=0;i< data.length;i++){ 
          elem.append(data[i].text+ "<br />");
        }  
      }
    }
  };
}).
config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/home', {templateUrl: 'partials/knowday.html', controller: 'KnowDayCtrl'});
    $routeProvider.when('/app/knowday',{templateUrl:'partials/knowday.html',controller:'KnowDayCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
    
}]);