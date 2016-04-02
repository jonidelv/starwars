(function() {
  'use strict';

  angular
    .module('app.sections.planets')
    .config(planetsRoute);

  planetsRoute.$inject = ['$stateProvider'];

  /* @ngInject */
  function planetsRoute($stateProvider) {
    $stateProvider
      .state('planets', {
        parent: 'home',
        url: 'planets/:id',
        onEnter: ['$rootScope', '$uibModal', '$state', function($rootScope, $uibModal, $state) {

          $uibModal.open({
            controller: 'PlanetsController',
            controllerAs: 'vm',
            templateUrl: 'app/sections/planets/planets.html',
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
