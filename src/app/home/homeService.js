function HomeService(Reminder, ModalService, ReminderDataAccess) {
	var reminders = ReminderDataAccess.getReminders();

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

	var addReminder = function (reminder) {
		ReminderDataAccess.saveReminder(reminder);
		reminders.push(reminder);
		sortRemindersByTimeRemaining();
	};

	var newReminderModalCtl = function ($scope) {
		$scope.newReminder = {};

		$scope.openDatepicker = function($event) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.datepickerOpened = true;
		};

		$scope.isNewReminderValid = function () {
			return $scope.newReminder.description != null &&
				$scope.newReminder.date != null;
		};

		$scope.submit = function () {
			if ($scope.isNewReminderValid()) {
				addReminder(new Reminder($scope.newReminder.date, $scope.newReminder.description));
				$scope.$close(true);
			}
		};
	};

    this.addNewReminder = function () {
        var resolve = {};
        ModalService.openModal("home/newReminderModal/newReminderModal.tpl.html", newReminderModalCtl, resolve);
    };

    this.getFilteredReminders = function (filterString) {
		var filteredItems = [];
		for (var i = 0; i < reminders.length; i++) {
			var description = reminders[i].description;
			if (description.toLowerCase().indexOf(filterString.toLowerCase()) !== -1) {
				filteredItems.push(reminders[i]);
			}
		}
		return filteredItems;
	};
}

angular.module('angulaReminders.home')
    .service('HomeService', HomeService);