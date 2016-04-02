(function() {
  'use strict';

  angular
    .module('app.sections.people')
    .config(peopleRoute);

  peopleRoute.$inject = ['$stateProvider'];

  /* @ngInject */
  function peopleRoute($stateProvider) {
    $stateProvider
      .state('people', {
        parent: 'home',
        url: 'people/:id',
        onEnter: ['$rootScope', '$uibModal', '$state', function($rootScope, $uibModal, $state) {

          $uibModal.open({
            controller: 'PeopleController',
            controllerAs: 'vm',
            templateUrl: 'app/sections/people/people.html',
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
