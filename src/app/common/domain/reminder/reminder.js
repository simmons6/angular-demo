angular.module('angulaReminders.common.domain.reminder', [])
    .factory('Reminder', function ReminderFactory() {

        function Reminder(date, name) {
            this.id = null;
            this.date = date;
            this.name = name;
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
    });