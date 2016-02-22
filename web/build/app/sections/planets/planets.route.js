(function() {
  'use strict';

  angular
    .module('app.planets')
    .config(planetsRoute);

  planetsRoute.$inject = ['$stateProvider'];

  /* @ngInject */
  function planetsRoute($stateProvider) {
    $stateProvider
      .state('planets', {
        url: '/planets',
        templateUrl: 'app/sections/planets.html',
        controller: 'planetsController',
        controllerAs: 'vm'
      });
  }

})();
