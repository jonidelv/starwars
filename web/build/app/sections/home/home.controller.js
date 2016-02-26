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
      vm.variable = 'name';

      vm.onSelectChange = function(option) {
        vm.loading = true;
        swapi[option.toLowerCase()].all()
          .then(function(response) {
            response.results.forEach(function(item) {
              var property = option === 'Films' ? 'title' : 'name';
              vm.itemsMap[item[property]] = item;
              vm.items.push(item);
            });
            //vm.items = response.results;
            vm.father = response.count;
            vm.loading = false;
          });
      };


      vm.selectId = function(selectedName, parentState) {
        var item = vm.itemsMap[selectedName];
        var itemId = item.url.replace(/\D/g, '');
        $state.go(parentState.toLowerCase(), { id:itemId });
        // for (var i = 0; i < vm.items.length; i++) {
        //   if (vm.items[i].name === selectedName) {
        //     var itemId = vm.items[i].url.replace(/\D/g, '');
        //     $state.go(parentState.toLowerCase(), { id:itemId });
        //   }
        // }
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

        vm.answer = function(option, item) {
          if (option === 'Films') {
            return item.title;
          }
          return item.name;
        };



      }

    })();
