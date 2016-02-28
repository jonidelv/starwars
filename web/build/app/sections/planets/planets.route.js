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
        parent: 'home',
        url: 'planets/:id',
        onEnter: ['$uibModal', '$state', function($uibModal, $state) {

          $uibModal.open({
            controller: 'PlanetsController',
            controllerAs: 'vm',
            templateUrl: 'app/sections/planets/planets.html',
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
