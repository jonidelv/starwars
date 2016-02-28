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
        parent: 'home',
        url: 'starships/:id',
        onEnter: ['$uibModal', '$state', function($uibModal, $state) {

          $uibModal.open({
            controller: 'StarshipsController',
            controllerAs: 'vm',
            templateUrl: 'app/sections/starships/starships.html',
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
