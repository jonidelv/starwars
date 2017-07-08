(function() {
  'use strict';

  angular
    .module('app.components.starwars-modal')
    .directive('starwarsModal', starwarsModal);

  function starwarsModal() {
    return {
      transclude: true,
      scope: {
        title: '='
      },
      templateUrl: 'app/components/starwars-modal/starwars-modal.html'
    };

  }
})();
