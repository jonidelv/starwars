(function() {
  'use strict';

  angular
    .module('app.films')
    .config(filmsRoute);

  filmsRoute.$inject = ['$stateProvider'];

  /* @ngInject */
  function filmsRoute($stateProvider) {
    $stateProvider
      .state('films', {
        url: '/films',
        templateUrl: 'app/sections/films.html',
        controller: 'filmsController',
        controllerAs: 'vm'
      });
  }

})();
