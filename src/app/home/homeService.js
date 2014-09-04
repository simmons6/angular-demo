angular.module('angulaReminders.home')
    .service('HomeService', function HomeService(Reminder, ModalService, DataAccessService) {
	var reminders = DataAccessService.getReminders();

	var remindersDateCompare = function (reminderA, reminderB) {
		return reminderA.date > reminderB.date;
	};

	var sortRemindersByTimeRemaining = function () {
		reminders.sort(remindersDateCompare);
	};

	sortRemindersByTimeRemaining();
	this.getReminders = function () {
		return reminders;
	};

	this.addReminder = function (reminder) {
		DataAccessService.saveReminder(reminder);
		reminders.push(reminder);
		sortRemindersByTimeRemaining();
	};

    this.addNewReminder = function () {
        ModalService.openModal("home/newReminderModal/newReminderModal.tpl.html", 'NewReminderModalCtrl');
    };

    this.deleteReminder = function (reminder) {
        DataAccessService.deleteReminder(reminder);
        var reminderIndex = reminders.indexOf(reminder);
        reminders.splice(reminderIndex, 1);
    };
});