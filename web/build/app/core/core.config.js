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

  stateConfig.$inject = ['$rootScope', '$state', '$uibModalInstance'];

  /* @ngInject */
  function stateConfig ($rootScope, $state, $uibModalInstance) {

    $rootScope.stateHandler = {
      history: [],
      isGoingBack: false,
      goBack: function(modalInstance) {
        console.log(this.history);
        var previousState = this.history.pop();
        console.log(previousState);
        this.isGoingBack = true;
        if (previousState.name === 'home') { $uibModalInstance.close(); }
        $state.go(previousState.name, {id: previousState.param});
      }
    };
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      // if $state is going home, remove state history
      $rootScope.stateHandler.history = toParams.id ? $rootScope.stateHandler.history : [];

      if (!$rootScope.stateHandler.isGoingBack && fromState.name) {
        var previousState = fromState;
        previousState.param = fromParams.id;
        $rootScope.stateHandler.history.push(previousState);
      }
      $rootScope.stateHandler.isGoingBack = false;
    });
  }

})();
