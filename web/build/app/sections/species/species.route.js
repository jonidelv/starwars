(function() {
  'use strict';

  angular
    .module('app.species')
    .config(speciesRoute);

  speciesRoute.$inject = ['$stateProvider'];

  /* @ngInject */
  function speciesRoute($stateProvider) {
    $stateProvider
      .state('species', {
        url: '/species',
        templateUrl: 'app/sections/species.html',
        controller: 'speciesController',
        controllerAs: 'vm'
      });
  }

})();
