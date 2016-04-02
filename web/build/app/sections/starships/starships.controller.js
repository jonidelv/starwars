(function() {
  'use strict';

  angular
    .module('app.sections.starships')
    .controller('StarshipsController', StarshipsController);

  StarshipsController.$inject = ['$q', '$stateParams', 'swapi'];

  /* @ngInject */
  function StarshipsController($q, $stateParams, swapi) {
    var vm = this;
    vm.getId = getId;

    activate();

    function activate() {
      return swapi.starships.id($stateParams.id).then(function(starships) {
        vm.starships = starships;
        console.log(vm.starships);

        var pilotsQueue = [];
        vm.starships.pilots.forEach(function(pilotsUrl) {
          pilotsQueue.push(swapi.get(pilotsUrl));
        });

        return $q.all(pilotsQueue);
      }).then(function(response) {
        vm.pilots = response;

        var filmsQueue = [];
        vm.starships.films.forEach(function(filmsUrl) {
          filmsQueue.push(swapi.get(filmsUrl));
        });

        return $q.all(filmsQueue);
      }).then(function(films) {
        vm.films = films;
        return vm.filmsList;
      });
    }

    function getId(url) {
      return url.replace(/\D/g, '');
    }

  }
})();
