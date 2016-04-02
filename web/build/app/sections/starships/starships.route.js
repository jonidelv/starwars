(function() {
  'use strict';

  angular
    .module('app.sections.starships')
    .config(starshipsRoute);

  starshipsRoute.$inject = ['$stateProvider'];

  /* @ngInject */
  function starshipsRoute($stateProvider) {
    $stateProvider
      .state('starships', {
        parent: 'home',
        url: 'starships/:id',
        onEnter: ['$rootScope', '$uibModal', '$state', function($rootScope, $uibModal, $state) {

          $uibModal.open({
            controller: 'StarshipsController',
            controllerAs: 'vm',
            templateUrl: 'app/sections/starships/starships.html',
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
