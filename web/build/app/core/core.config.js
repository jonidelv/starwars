(function() {
  'use strict';

  angular
    .module('app.core')
    .config(coreConfig)
    .run(stateConfig);

  coreConfig.$inject = ['$locationProvider', '$urlRouterProvider'];

  /* @ngInject */
  function coreConfig($locationProvider, $urlRouterProvider) {
    if (window.history && window.history.pushState) {
      //$locationProvider.html5Mode(true);
    }

    $urlRouterProvider.otherwise('/');
  }

  stateConfig.$inject = ['$rootScope', '$state'];

  /* @ngInject */
  function stateConfig ($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

      $state.previous = fromState;
      $state.previous.params = fromParams;
    });
  }

})();
