'use strict';

/**
 * @ngdoc function
 * @name livroApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the livroApp
 */
angular.module('livroApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
