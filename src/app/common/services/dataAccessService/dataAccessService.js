angular.module('angulaReminders.common.services.dataAccessService', ['jmdobry.angular-cache'])
    .service('DataAccessService', function DataAccessService($angularCacheFactory, Reminder) {
    var cacheOptions = {
        storageMode: 'localStorage'
    };
    var remindersCache = $angularCacheFactory('remindersCache');
    remindersCache.setOptions(cacheOptions);

    var getNextReminderId = function () {
        var minIndex = 1;
        while(remindersCache.get(minIndex) != null) {
            minIndex++;
        }
        return minIndex;
    };

    this.getReminders = function () {
        var list = remindersCache.get('all');
        if (list == null) {
            list = [];
        }
        for (var i = 0; i < list.length; i++) {
            if (!(list[i] instanceof Reminder)) {
                var id = list[i].id;
                list[i] = new Reminder(new Date(list[i].date), list[i].description);
                list[i].id = id;
            }
        }

        return list;
    };

    var addReminderToCollection = function (reminder) {
        var list = remindersCache.get('all');
        if (list == null) {
            list = [];
        }
        list.push(reminder);
        remindersCache.put('all', list);
    };

    this.saveReminder = function (reminder) {
        if (reminder.id == null) {
            reminder.id = getNextReminderId();
            addReminderToCollection(reminder);
        }
        remindersCache.put(reminder.id, reminder);
    };

    var removeReminderFromCollection = function (reminder) {
        var list = remindersCache.get('all');
        if (list != null) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].id === reminder.id) {
                    list.splice(i, 1);
                }
            }
            remindersCache.put('all', list);
        }
    };

    this.deleteReminder = function (reminder) {
        if (reminder.id != null) {
            remindersCache.remove(reminder.id);
            removeReminderFromCollection(reminder);
        }
    };
});