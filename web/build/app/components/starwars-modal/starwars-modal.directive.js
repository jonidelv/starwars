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
      // templateUrl: 'starwars-modal.html'
      template: '<div class="modal-body">' +
                  '<h3 class="title-modal">{{title}}</h3>' +
                  '<div class=interior ng-transclude>' +
                  '</div>' +
                '</div>'
    };

  }
})();
