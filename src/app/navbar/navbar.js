angular.module('angularDemo.navbar', [])
    .directive('angularDemoNavbar', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'navbar/navbar.tpl.html',
            scope: {
                reminder: '='
            },
            controller: function ($scope) {
                $scope.test = '';
            }
        };
    });