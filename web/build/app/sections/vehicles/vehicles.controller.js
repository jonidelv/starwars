(function() {
    'use strict';

    angular
        .module('app.vehicles')
        .controller('VehiclesController', VehiclesController);

    VehiclesController.$inject = ['$stateParams', 'swapi'];

    /* @ngInject */
    function VehiclesController($stateParams, swapi) {
        var vm = this;

        activate();

        function activate() {
          return swapi.vehicles.id($stateParams.id).then(function(vehicles) {
            vm.vehicles = vehicles;
            console.log(vm.vehicles);
            if (vm.vehicles.pilots.length >= 1) {

              swapi.get(vm.vehicles.pilots[0])
                .then(function(response) {
                    vm.pilot = response.name;
              });
            }
            vm.manufacturer = vm.vehicles.manufacturer.substring(0, 44);
            vm.pilot = 'none';
            return vehicles;
          });
        }

    }
})();
