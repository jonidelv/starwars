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
        parent: 'home',
        url: 'vehicles/:id',
        onEnter: ['$uibModal', '$state', function($uibModal, $state) {

          $uibModal.open({
            controller: 'VehiclesController',
            controllerAs: 'vm',
            templateUrl: 'app/sections/vehicles/vehicles.html',
            size: 'md'
          }).result.then(function() {
            $state.go('^');
          }, function () {
            $state.go('^');
          });

        }
      ]
      });
  }

})();
