function arNavbar() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'common/directives/arNavbar/arNavbar.tpl.html'
    };
}

angular.module('angulaReminders.common')
    .directive('arNavbar', arNavbar);