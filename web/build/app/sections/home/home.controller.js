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

          vm.items = [
              {id: 1, name: 'first'},
              {id: 2, name: 'second'},
              {id: 3, name: 'third'},
              {id: 4, name: 'fourth'},
              {id: 5, name: 'fifth'},
          ];
          vm.selectedItem = vm.items[0];
    }

})();
