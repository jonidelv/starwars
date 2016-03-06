(function() {
    'use strict';

    angular
        .module('app.starships')
        .controller('StarshipsController', StarshipsController);

    StarshipsController.$inject = ['$stateParams', 'swapi'];

    /* @ngInject */
    function StarshipsController($stateParams, swapi) {
        var vm = this;

        activate();

        function activate() {
          return swapi.starships.id($stateParams.id).then(function(starships) {
            vm.starships = starships;
            console.log(vm.starships);
            if (vm.starships.pilots.length >= 1) {

              swapi.get(vm.starships.pilots[0])
                .then(function(response) {
                    vm.pilot2 = response.name;
              });
            }
            vm.manufacturer = vm.starships.manufacturer.substring(0, 44);
            vm.pilot2 = 'none';
            return starships;
          });
        }

    }
})();
