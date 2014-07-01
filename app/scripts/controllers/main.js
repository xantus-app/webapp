'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('MainCtrl', function ($scope, User) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.userinfo = User.get({ "Id": "1" });

  });
