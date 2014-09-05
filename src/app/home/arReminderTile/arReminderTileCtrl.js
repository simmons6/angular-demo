angular.module('angulaReminders.home.arReminderTile')
    .controller('arReminderTileController', function ($scope, $interval, HomeService) {
        var updateTimeRemaining = function () {
            if ($scope.reminder) {
                $scope.daysRemaining = $scope.reminder.getDaysRemaining();
                $scope.hoursRemaining = $scope.reminder.getHoursRemaining();
                $scope.minutesRemaining = $scope.reminder.getMinutesRemaining();
                $scope.secondsRemaining = $scope.reminder.getSecondsRemaining();
            }
        };
    
        updateTimeRemaining();
        var reminderInterval = $interval(updateTimeRemaining, 1000);
    
        $scope.deleteReminder = HomeService.deleteReminder;
    
        $scope.$on('$destroy', function () {
            $interval.cancel(reminderInterval);
        });
    });