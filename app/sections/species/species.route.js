(function() {
  'use strict';

  angular
    .module('app.sections.species')
    .config(speciesRoute);

  speciesRoute.$inject = ['$stateProvider'];

  /* @ngInject */
  function speciesRoute($stateProvider) {
    $stateProvider
      .state('species', {
        parent: 'home',
        url: 'species/:id',
        onEnter: ['$rootScope', '$uibModal', '$state', function($rootScope, $uibModal, $state) {

          $uibModal.open({
            controller: 'SpeciesController',
            controllerAs: 'vm',
            templateUrl: 'app/sections/species/species.html',
            size: 'md'
          }).result.then(function() {
            $rootScope.stateHandler.goBack();
          }, function() {
            $rootScope.stateHandler.goBack();

          });

        }
      ]
      });
  }

})();
