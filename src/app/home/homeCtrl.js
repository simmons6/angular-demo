angular.module('angulaReminders.home')
    .controller('HomeCtrl', function HomeCtrl($scope, $filter, HomeService) {

        $scope.reminders = HomeService.getReminders();
        $scope.isotopeTemplate = '<ar-reminder-tile reminder="item"></ar-reminder-tile>';
        $scope.filterString = "";

        $scope.launchNewReminderModal = HomeService.launchNewReminderModal;

        $scope.$watchCollection('[filterString, reminders.length]', function () {        
            $scope.filteredItems = $filter('reminderNameFilter')($scope.reminders, $scope.filterString);
        });

    });