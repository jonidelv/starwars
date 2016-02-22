(function() {
  'use strict';

  angular
    .module('app.starships')
    .config(starshipsRoute);

  starshipsRoute.$inject = ['$stateProvider'];

  /* @ngInject */
  function starshipsRoute($stateProvider) {
    $stateProvider
      .state('starships', {
        url: '/starships',
        templateUrl: 'app/sections/starships.html',
        controller: 'starshipsController',
        controllerAs: 'vm'
      });
  }

})();
