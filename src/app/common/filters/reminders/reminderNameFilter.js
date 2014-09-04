angular.module('angulaReminders.common.filters.reminderNameFilter', [])
    .filter('reminderNameFilter', function reminderNameFilter() {
        
        var nameMatches = function (name, filterString) {
            return name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1;
        };

        return function (reminders, filterString) {
            if (filterString == null || filterString === '') {
                return reminders;
            }

            var filteredItems = [];
            for (var i = 0; i < reminders.length; i++) {
                if (nameMatches(reminders[i].name, filterString)) {
                    filteredItems.push(reminders[i]);
                }
            }
            return filteredItems;
        };
    });