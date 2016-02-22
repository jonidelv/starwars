(function() {
  'use strict';

  angular
    .module('app.home')
    .config(homeRoute);

  homeRoute.$inject = ['$stateProvider'];

  /* @ngInject */
  function homeRoute($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/app/sections/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      });
  }

})();
