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

  stateConfig.$inject = ['$rootScope', '$state', '$uibModalStack'];

  /* @ngInject */
  function stateConfig($rootScope, $state, $uibModalStack) {
    $rootScope.stateHandler = {
      history: [],
      isGoingBack: false,
      goBack: function() {
        if (!this.history.length) {
          return;
        }
        var previousState = this.history.pop();

        this.isGoingBack = true;
        if (previousState.name === 'home') {
          $uibModalStack.dismissAll();
        }
        $state.go(previousState.name, {
          id: previousState.param
        });
      }
    };
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      if (!$rootScope.stateHandler.isGoingBack && fromState.name) {
        var previousState = fromState;
        previousState.param = fromParams.id;
        $rootScope.stateHandler.history.push(previousState);
      }
      $rootScope.stateHandler.isGoingBack = false;
    });
  }

})();
