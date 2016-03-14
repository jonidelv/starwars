(function() {
    'use strict';

    angular
        .module('app.people')
        .controller('PeopleController', PeopleController);

    PeopleController.$inject = ['$q', '$stateParams', 'swapi'];

    /* @ngInject */
    function PeopleController($q, $stateParams, swapi) {
        var vm = this;

        activate();

        function activate() {
          return swapi.people.id($stateParams.id).then(function(person) {
            vm.person = person;
            vm.homeWorldId = vm.person.homeworld.replace(/\D/g, '');
            console.log (vm.person);

            return swapi.get(vm.person.homeworld);
          }).then(function(response) {
            vm.homeworld = response.name;

            var filmsQueue = [];
            vm.person.films.forEach(function(filmsUrl) {
              filmsQueue.push(swapi.get(filmsUrl));
            });

            return $q.all(filmsQueue);
          }).then(function(films) {
            vm.films = films;
            return vm.filmsList;
          });
        }


    }
})();
