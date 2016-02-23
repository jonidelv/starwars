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
      vm.variable = 'name';

      vm.onSelectChange = function(option) {
        vm.loading = true;
        if (option === 'Films') {
          vm.variable = 'title';
          console.log(vm.variable);
        }
        swapi[option.toLowerCase()].all()
          .then( function(response) {
              vm.items = response.results;
              vm.father = response.count;
              vm.loading = false;

              vm.searchId = function (selection) {
                  console.log(111);
                  for (var i = 0; i < response.count; i++) {
                    if (vm.items[i] === selection) {
                      console.log(vm.items[i].id);
                      return vm.items[i].id;

                    }
                  }
              };

          });
      };

      vm.placeholder = function(){
        if (!vm.category) {
            return 'Select a category';
        }
        if (vm.category && vm.loading) {
          return 'Loading... ';
        } else {
          return 'Start typing the '+vm.category;
        }
      };

      vm.answer = function (option, item) {
        if (option === 'Films' ) {
          return item.title;
        }
        return item.name;
      };



  }

})();
