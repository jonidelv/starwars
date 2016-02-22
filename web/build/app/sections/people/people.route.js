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
        url: '/people',
        templateUrl: 'app/sections/people.html',
        controller: 'peopleController',
        controllerAs: 'vm'
      });
  }

})();
