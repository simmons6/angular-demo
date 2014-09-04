angular.module('angulaReminders.home.newReminderModal', ['angulaReminders.common'])
    .controller('NewReminderModalCtrl', function NewReminderModalCtrl($scope, Reminder, HomeService) {
        $scope.newReminder = {};

        $scope.openDatepicker = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.datepickerOpened = true;
        };

        $scope.isNewReminderValid = function () {
            return $scope.newReminder.name != null &&
                $scope.newReminder.date != null;
        };

        $scope.submit = function () {
            if ($scope.isNewReminderValid()) {
                HomeService.addReminder(new Reminder($scope.newReminder.date, $scope.newReminder.name));
                $scope.$close(true);
            }
        };
    });