(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    function HomeController() {
        var vm = this;
        vm.selects =
          {
            names: ['films', 'people', 'planets', 'species', 'starships', 'vehicles']
          };

    }

})();
