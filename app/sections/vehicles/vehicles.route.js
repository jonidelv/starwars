(function() {
  'use strict';

  angular
    .module('app.sections.vehicles')
    .config(vehiclesRoute);

  vehiclesRoute.$inject = ['$stateProvider'];

  /* @ngInject */
  function vehiclesRoute($stateProvider) {
    $stateProvider
      .state('vehicles', {
        parent: 'home',
        url: 'vehicles/:id',
        onEnter: ['$rootScope', '$uibModal', '$state', function($rootScope, $uibModal, $state) {

          $uibModal.open({
            controller: 'VehiclesController',
            controllerAs: 'vm',
            templateUrl: 'app/sections/vehicles/vehicles.html',
            size: 'md'
          }).result.then(function() {
            $rootScope.stateHandler.goBack();
          }, function() {
            $rootScope.stateHandler.goBack();

          });

        }]
      });
  }

})();
