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
    new Reminder(new Date(2015, 06, 03), "John Smith"),
    new Reminder(new Date(2014, 09, 10), "Joe Shmoe"),
    new Reminder(new Date(2014, 09, 10), "John Connor"),
    new Reminder(new Date(2014, 09, 10), "Connor Simmons")
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

  $scope.filterString = "";
  $scope.filteredItems = $scope.reminders;

  var updateFilter = function () {
    $scope.filteredItems = [];
    for (var i = 0; i < $scope.reminders.length; i++) {
      var description = $scope.reminders[i].description;
      if (description.toLowerCase().indexOf($scope.filterString.toLowerCase()) !== -1) {
        $scope.filteredItems.push($scope.reminders[i]);
      }
    }
  };

  $scope.$watchCollection('[filterString, reminders.length]', function () {
    updateFilter();
  });

})

;
