(function() {
  'use strict';

  angular
    .module('app.core')
    .config(coreConfig);

  coreConfig.$inject = ['$locationProvider', '$urlRouterProvider'];

  /* @ngInject */
  function coreConfig($locationProvider, $urlRouterProvider) {
    if (window.history && window.history.pushState) {
      //$locationProvider.html5Mode(true);
    }

    $urlRouterProvider.otherwise('/');
  }

})();
