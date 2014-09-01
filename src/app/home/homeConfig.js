function HomeConfig($stateProvider) {
  $stateProvider.state( 'home', {
    url: '/home',
    controller: 'HomeCtrl',
    templateUrl: 'home/home.tpl.html',
    data: { 
      pageTitle: 'Home' 
    }
  });
}

angular.module('angulaReminders.home')
  .config(HomeConfig);