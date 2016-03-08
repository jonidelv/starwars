(function() {
  'use strict';

  angular
    .module('app.species')
    .controller('SpeciesController', SpeciesController);

  SpeciesController.$inject = ['$q', '$stateParams', 'swapi'];

  /* @ngInject */
  function SpeciesController($q, $stateParams, swapi) {
    var vm = this;
    vm.getId = getId;

    activate();

    function activate() {
      return swapi.species.id($stateParams.id).then(function(species) {
        vm.species = species;

        return swapi.get(vm.species.homeworld);
      }).then(function(response) {
        vm.homeworld = response.name;

        var peopleQueue = [];
        vm.species.people.forEach(function(personUrl) {
          peopleQueue.push(swapi.get(personUrl));
        });

        return $q.all(peopleQueue);
      }).then(function(people) {
        vm.people = people;
        return people;
      });

    }

    function getId(url){
      return url.replace(/\D/g, '');
    }

  }
})();
