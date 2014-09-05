describe('home', function() {
    beforeEach( module('angulaReminders.home') );

    describe('HomeService', function () {

        var HomeService = null;
        var dataAccessServiceMock; 
        var homeServiceReminders = [];

        beforeEach(function () {

            dataAccessServiceMock = {
                getReminders: function () {
                    return homeServiceReminders;
                },
                saveReminder: function () { }
            };

            module(function ($provide) {
                $provide.value('DataAccessService', dataAccessServiceMock);
            });

            inject(function (_HomeService_) {
                HomeService = _HomeService_;
            });
        });

        describe('isReminderValid', function () {

            it('should return true for a valid reminder', function () {
                var reminder = {
                    name: 'My Reminder',
                    date: new Date()
                };
                expect(HomeService.isReminderValid(reminder)).toBeTruthy();
            });

            it('should return false for invalid reminders', function () {
                var reminder1 = {
                    date: new Date()
                };
                var reminder2 = {
                    name: 'Name'
                };
                expect(HomeService.isReminderValid(reminder1)).toBeFalsy();
                expect(HomeService.isReminderValid(reminder2)).toBeFalsy();
            });

        });

        describe('addReminder', function () {

            it('should append a new reminder to an empty list', function () {
                var startReminderCount = homeServiceReminders.length;
                HomeService.addReminder(new Date(), 'My Reminder');

                var endReminderCount = homeServiceReminders.length;
                expect(endReminderCount).toEqual(startReminderCount + 1);
            });

        });
    });
    
});