angular.module('angulaReminders')
    .config(function AppConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });