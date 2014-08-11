angular.module('angularDemo.domain', [])
    .factory('Reminder', function () {

        function Reminder(date, description) {
            this.date = date;
            this.description = description;
            this.expanded = false;
        }

        var _MS_PER_DAY = 1000 * 60 * 60 * 24;
        var _MS_PER_HOUR = 1000 * 60 * 60;
        var _MS_PER_MINUTE = 1000 * 60;

        Reminder.prototype.getDaysRemaining = function () {
            var msRemaining = this.date.getTime() - (new Date()).getTime();
            return Math.floor(msRemaining / _MS_PER_DAY);
        };

        Reminder.prototype.getHoursRemaining = function () {
            var msRemaining = this.date.getTime() - (new Date()).getTime();
            msRemaining = msRemaining - (this.getDaysRemaining() * _MS_PER_DAY);
            return Math.floor(msRemaining / _MS_PER_HOUR);
        };

        Reminder.prototype.getMinutesRemaining = function () {
            var msRemaining = this.date.getTime() - (new Date()).getTime();
            msRemaining = msRemaining - (this.getDaysRemaining() * _MS_PER_DAY) - (this.getHoursRemaining() * _MS_PER_HOUR);
            return Math.floor(msRemaining / _MS_PER_MINUTE);
        };

        Reminder.prototype.getSecondsRemaining = function () {
            var msRemaining = this.date.getTime() - (new Date()).getTime();
            msRemaining = msRemaining - 
                (this.getDaysRemaining() * _MS_PER_DAY) - 
                (this.getHoursRemaining() * _MS_PER_HOUR) -
                (this.getMinutesRemaining() * _MS_PER_MINUTE);
            return Math.floor(msRemaining / 1000);
        };

        return Reminder;
    })

    .directive('angularDemoReminder', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'reminder/reminder.tpl.html',
            scope: {
                reminder: '='
            },
            controller: function ($scope, $interval) {
                $scope.daysRemaining = $scope.reminder.getDaysRemaining();
                $scope.hoursRemaining = $scope.reminder.getHoursRemaining();
                $scope.minutesRemaining = $scope.reminder.getMinutesRemaining();
                $scope.secondsRemaining = $scope.reminder.getSecondsRemaining();

                var reminderInterval = $interval(function () {
                    if ($scope.reminder) {
                        $scope.daysRemaining = $scope.reminder.getDaysRemaining();
                        $scope.hoursRemaining = $scope.reminder.getHoursRemaining();
                        $scope.minutesRemaining = $scope.reminder.getMinutesRemaining();
                        $scope.secondsRemaining = $scope.reminder.getSecondsRemaining();
                    }
                }, 1000);

                $scope.$on('$destroy', function () {
                    $interval.cancel(reminderInterval);
                });
            }
        };
    })

    .filter('dateStringFilter', function () {
        return function (dateString) {
            var date = new Date(dateString);
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var year = date.getFullYear();
            year = year.toString().substring(2);

            return month + "/" + day + "/" + year;
        };
    })
;