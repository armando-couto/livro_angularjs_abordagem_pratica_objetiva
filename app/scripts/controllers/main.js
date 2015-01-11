'use strict';

/**
 * @ngdoc function
 * @name livroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the livroApp
 */
angular.module('livroApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
