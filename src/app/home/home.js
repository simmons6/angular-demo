angular.module('angularDemo.home', ['angularDemo.domain', 'ui.bootstrap'])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    controller: 'HomeCtrl',
    templateUrl: 'home/home.tpl.html',
    data: { 
      pageTitle: 'Home' 
    }
  });
})

.controller( 'HomeCtrl', function ($scope, Reminder) {
  $scope.reminders = [
    new Reminder(new Date(2015, 06, 03), "Casey's Birthday"),
    new Reminder(new Date(2014, 09, 10), "Mom's Birthday")
  ];

  $scope.newDate = null;
  $scope.newDescription = null;
  $scope.openDatepicker = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };


  $scope.addNewReminder = function() {
    $scope.reminders.unshift(
        new Reminder(new Date(2015, 01, 01), "Test")
      );
  };

  $scope.removeReminder = function(reminder) {
    var index = $scope.reminders.indexOf(reminder);
    $scope.reminders.splice(index, 1);
  };

  $scope.isotopeTemplate = '<angular-demo-reminder reminder="item"></angular-demo-reminder>';

  var reminderFilterA = function () {
     return true;
  };

  var reminderFilterB = function (reminder) {
     return reminder.description === 'Test';
  };

  $scope.activeFilter = reminderFilterA;
  $scope.toggleFilter = function () {
    if ($scope.activeFilter == reminderFilterA) {
      $scope.activeFilter = reminderFilterB;
    } else {
      $scope.activeFilter = reminderFilterA;
    }
  };

  $scope.expandItem = function () {
    $scope.reminders[0].expanded = !$scope.reminders[0].expanded;
  };

})

;
