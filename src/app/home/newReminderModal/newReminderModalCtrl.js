angular.module('angulaReminders.home.newReminderModal', ['angulaReminders.common'])
    .controller('NewReminderModalCtrl', function NewReminderModalCtrl($scope, HomeService) {
        $scope.newReminder = {};

        $scope.openDatepicker = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.datepickerOpened = true;
        };

        $scope.isReminderValid = HomeService.isReminderValid;

        $scope.submit = function () {
            if (HomeService.isReminderValid($scope.newReminder)) {
                HomeService.addReminder($scope.newReminder.date, $scope.newReminder.name);
                $scope.$close(true);
            }
        };
    });