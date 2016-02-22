(function() {
  'use strict';

  angular
    .module('app.vehicles')
    .config(vehiclesRoute);
    
  vehiclesRoute.$inject = ['$stateProvider'];

  /* @ngInject */
  function vehiclesRoute($stateProvider) {
    $stateProvider
      .state('vehicles', {
        url: '/vehicles',
        templateUrl: 'app/sections/vehicles.html',
        controller: 'VehiclesController',
        controllerAs: 'vm'
      });
  }

})();
