(function() {
  'use strict';

  angular
    .module('app.people')
    .config(peopleRoute);

  peopleRoute.$inject = ['$stateProvider'];

  /* @ngInject */
  function peopleRoute($stateProvider) {
    $stateProvider
      .state('people', {
        parent: 'home',
        url: 'people/:id',
        onEnter: ['$uibModal', '$state', function($uibModal, $state) {

          $uibModal.open({
            controller: 'PeopleController',
            controllerAs: 'vm',
            templateUrl: 'app/sections/people/people.html',
            size: 'md'
          }).result.then(function() {
            $state.go($state.previous.name, { id: $state.previous.params.id });
          }, function () {
            $state.go($state.previous.name, { id: $state.previous.params.id });
          });

        }
      ]
      });
  }

})();
