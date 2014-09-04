angular.module('angulaReminders.home')
    .controller('HomeCtrl', function HomeCtrl($scope, $filter, Reminder, HomeService) {
        var viewModel = this;

        $scope.reminders = HomeService.getReminders();
        $scope.addNewReminder = HomeService.addNewReminder;

        $scope.isotopeTemplate = '<ar-reminder-tile reminder="item"></ar-reminder-tile>';
        $scope.filterString = "";
        
        $scope.$watchCollection('[filterString, reminders.length]', function () {        
            $scope.filteredItems = $filter('reminderNameFilter')($scope.reminders, $scope.filterString);
        });
    });