(function() {
  'use strict';

  angular
    .module('app.sections.vehicles')
    .controller('VehiclesController', VehiclesController);

  VehiclesController.$inject = ['$q', '$stateParams', 'swapi'];

  /* @ngInject */
  function VehiclesController($q, $stateParams, swapi) {
    var vm = this;
    vm.getId = getId;

    activate();

    function activate() {
      return swapi.vehicles.id($stateParams.id).then(function(vehicles) {
        vm.vehicles = vehicles;


        var pilotsQueue = [];
        vm.vehicles.pilots.forEach(function(pilotsUrl) {
          pilotsQueue.push(swapi.get(pilotsUrl));
        });

        return $q.all(pilotsQueue);
      }).then(function(response) {
        vm.pilots = response;

        var filmsQueue = [];
        vm.vehicles.films.forEach(function(filmsUrl) {
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
