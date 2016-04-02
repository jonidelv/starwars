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
        onEnter: ['$uibModal', '$state', function($uibModal, $state) {

          $uibModal.open({
            controller: 'SpeciesController',
            controllerAs: 'vm',
            templateUrl: 'app/sections/species/species.html',
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
