(function() {
    'use strict';

    angular
        .module('app.species')
        .controller('SpeciesController', SpeciesController);

    SpeciesController.$inject = ['$stateParams', 'swapi'];

    /* @ngInject */
    function SpeciesController($stateParams, swapi) {
        var vm = this;

        activate();

        function activate() {
          return swapi.species.id($stateParams.id).then(function(species) {
            vm.species = species;
            return species;
          });
        }

    }
})();
