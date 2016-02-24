(function() {
    'use strict';

    angular
      .module('app.home')
      .controller('HomeController', HomeController);

    HomeController.$inject = ['swapi','$state'];

    function HomeController(swapi,$state) {
      var vm = this;
      vm.selects = {
        names: ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles']
      };
      vm.items = [];
      vm.variable = 'name';

      vm.onSelectChange = function(option) {
        vm.loading = true;
        swapi[option.toLowerCase()].all()
          .then( function(response) {
              vm.items = response.results;
              vm.father = response.count;
              vm.loading = false;
          });
      };


      vm.selectId = function(option, selected) {

        swapi[option.toLowerCase()].all()
          .then( function(response) {

              for (var i = 0; i < response.count; i++) {
                 if (response.results[i].name == selected){
                   var paso = response.results[i].url.replace(/\D/g,'');
                  console.log(paso);
                   //$state.go(option.toLowerCase()({ id:ad  }));
                   $state.go(option.toLowerCase());
                 }
              }

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
