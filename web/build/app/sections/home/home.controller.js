(function() {
    'use strict';

    angular
      .module('app.home')
      .controller('HomeController', HomeController);

    HomeController.$inject = ['swapi', '$state'];

    function HomeController(swapi, $state) {
      var vm = this;
      vm.selects = {
        names: ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles']
      };
      vm.items = [];
      vm.itemsMap = {};

      vm.onSelectChange = function(option) {
        vm.loading = true;
        swapi[option.toLowerCase()].all()
          .then(function(response) {
            vm.items = [];
            vm.itemsMap = {};
            response.results.forEach(function(item) {
              var property = option === 'Films' ? 'title' : 'name';
              console.log(property);
              vm.itemsMap[item[property]] = item;
              vm.items.push(item);
            });
            vm.loading = false;
          });
      };


      vm.selectId = function(selectedName, parentState) {
        var item = vm.itemsMap[selectedName];
        var itemId = item.url.replace(/\D/g, '');
        var parent = parentState.toLowerCase();
        vm.selectedItem = '';
        $state.go(parent, { id:itemId });
      };



        vm.placeholder = function() {
          if (!vm.category) {
            return 'Select a category';
          }
          if (vm.category && vm.loading) {
            return 'Loading... ';
          } else {
            return 'Start typing the ' + vm.category;
          }
        };

        vm.answer = function(option) {
          return option === 'Films' ? 'title' : 'name';
        };



      }

    })();
