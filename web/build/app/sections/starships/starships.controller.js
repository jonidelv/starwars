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
            return starships;
          });
        }

    }
})();
