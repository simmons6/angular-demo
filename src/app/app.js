angular.module('angulaReminders.common', ['ui.bootstrap', 'jmdobry.angular-cache']);
angular.module('angulaReminders.home', ['ui.bootstrap', 'angulaReminders.isotope', 'angulaReminders.common']);
angular.module('angulaReminders.reminder', ['ui.bootstrap', 'angulaReminders.common']);

angular.module( 'angulaReminders', [
  'templates-app',
  'templates-common',
  'ui.router',
  'angulaReminders.common',
  'angulaReminders.home',
  'angulaReminders.reminder'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | angulaReminders' ;
    }
  });
})
;