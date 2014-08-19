function arReminderTile() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'home/arReminderTile/arReminderTile.tpl.html',
        scope: {
            reminder: '='
        },
        controller: arReminderTileCtl
    };
}

function arReminderTileCtl($scope, $interval) {
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

    $scope.$on('$destroy', function () {
        $interval.cancel(reminderInterval);
    });
}

angular.module('angulaReminders.home')
    .directive('arReminderTile', arReminderTile);