angular.module('angularDemo.home', ['angularDemo.domain'])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})

.controller( 'HomeCtrl', function HomeController( $scope, Reminder ) {
  $scope.reminders = [
    new Reminder(new Date(2014, 08, 10), "Brandon's Birthday"),
    new Reminder(new Date(2014, 09, 10), "Mom's Birthday")
  ];


  $scope.addNewReminder = function() {
    $scope.reminders.unshift(
        new Reminder(new Date(2015, 01, 01), "Test")
      );
  };

  $scope.removeReminder = function(reminder) {
    var index = $scope.reminders.indexOf(reminder);
    $scope.reminders.splice(index, 1);
  };

})

;
