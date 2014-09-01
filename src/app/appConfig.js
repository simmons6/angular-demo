function AppConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
}

angular.module('angulaReminders')
  .config(AppConfig);