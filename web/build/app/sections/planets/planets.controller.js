(function() {
    'use strict';

    angular
        .module('app.planets')
        .controller('PlanetsController', PlanetsController);

    PlanetsController.$inject = ['$stateParams', 'swapi'];

    /* @ngInject */
    function PlanetsController($stateParams, swapi) {
        var vm = this;

        activate();

        function activate() {
          return swapi.planets.id($stateParams.id).then(function(planets) {
            vm.planets = planets;
            return planets;
          });
        }

    }
})();
