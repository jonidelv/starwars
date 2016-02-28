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
            return vehicles;
          });
        }

    }
})();
