(function() {
  'use strict';

  angular
    .module('app.sections.films')
    .config(filmsRoute);

  filmsRoute.$inject = ['$stateProvider'];

  /* @ngInject */
  function filmsRoute($stateProvider) {
    $stateProvider
      .state('films', {
        parent: 'home',
        url: 'films/:id',
        onEnter: ['$uibModal', '$state', function($uibModal, $state) {

          $uibModal.open({
            controller: 'FilmsController',
            controllerAs: 'vm',
            templateUrl: 'app/sections/films/films.html',
            size: 'md'
          }).result.then(function() {
            $state.go('^');
          }, function() {
            $state.go('^');
          });

        }]
      });
  }

})();
