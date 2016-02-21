(function() {
    'use strict';

    angular
      .module('app.home')
      .controller('HomeController', HomeController);

    HomeController.$inject = ['swapi'];

    function HomeController(swapi) {
      var vm = this;
      vm.selects = {
        names: ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles']
      };
      vm.items = [];

      vm.onSelectChange = function(option) {
        vm.loading = true;
        swapi[option.toLowerCase()].all()
          .then( function(response) {
              vm.items = response.results;
              vm.father = response.count;
              vm.loading = false;
          });
      }

      vm.placeholder = function(){
        if (!vm.category) {
            return 'Select a category';
        }
        if (vm.category && vm.loading) {
          return 'Loading... ';
        } else {
          return 'Start typing the '+vm.category;
        }
      }


  }

})();
