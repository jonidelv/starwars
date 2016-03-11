(function() {
    'use strict';

    angular
        .module('app.people')
        .controller('PeopleController', PeopleController);

    PeopleController.$inject = ['$stateParams', 'swapi'];

    /* @ngInject */
    function PeopleController($stateParams, swapi) {
        var vm = this;
        console.log('id:'+$stateParams.id);
        activate();

        function activate() {
          return swapi.people.id($stateParams.id).then(function(person) {
            vm.person = person;

            return person;
          });
        }

    }
})();
