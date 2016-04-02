(function() {
  'use strict';

  angular
    .module('app.sections.films')
    .controller('FilmsController', FilmsController);

  FilmsController.$inject = ['$stateParams', 'swapi'];

  /* @ngInject */
  function FilmsController($stateParams, swapi) {
    var vm = this;

    activate();

    function activate() {
      return swapi.films.id($stateParams.id).then(function(film) {
        vm.film = film;
        return film;

      });
    }

  }
})();
