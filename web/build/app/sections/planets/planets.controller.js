(function() {
  'use strict';

  angular
    .module('app.planets')
    .controller('PlanetsController', PlanetsController);

  PlanetsController.$inject = ['$q', '$stateParams', 'swapi'];

  /* @ngInject */
  function PlanetsController($q, $stateParams, swapi) {
    var vm = this;
    vm.getId = getId;

    activate();

    function activate() {
      return swapi.planets.id($stateParams.id).then(function(planets) {
        vm.planets = planets;

        var filmsQueue = [];
        vm.planets.films.forEach(function(filmsUrl) {
          filmsQueue.push(swapi.get(filmsUrl));
        });

        return $q.all(filmsQueue);
      }).then(function(films) {
        vm.films = films;

        var residentsQueue = [];
        vm.planets.residents.forEach(function(residentsUrl) {
          residentsQueue.push(swapi.get(residentsUrl));
        });

        return $q.all(residentsQueue);
      }).then(function(response) {
        vm.residents = response;
        return vm.residents;
      });


    }

    function getId(url) {
      return url.replace(/\D/g, '');
    }
  }
})();
