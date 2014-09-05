angular.module('angulaReminders.home.arReminderTile', [])
    .directive('arReminderTile', function arReminderTile() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'home/arReminderTile/arReminderTile.tpl.html',
            scope: {
                reminder: '='
            },
            controller: 'arReminderTileController'
        };
    });