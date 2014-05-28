'use strict';

angular.module('myApp.restServices', ['ngResource'])
    .factory('KnowDay',['$resource',function($resource){
        return $resource('/crawler/wiki/:month/:day',{'month': 'january', 'day':20});
    }]);
    