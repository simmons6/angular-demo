angular.module('angularDemo.isotope', [])
    .directive('isotopeContainer', function ($timeout) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'isotope/isotope.tpl.html',
            scope : {
                itemTemplate: '=',
                items: '='
            },
            link: function ($scope, element) {
                var isotopeOptions = {
                    itemSelector: '.item'
                };
                element.isotope(isotopeOptions);


                $scope.$watch('items', function (newItems, oldItems) {
                    $timeout(function () {
                        element.isotope('reloadItems');
                        element.isotope();
                    }, 0, false);                    
                }, true);

                $scope.$on('$destroy', function() {
                    element.isotope('destroy');
                });
            }
        };
    })
    .directive('isotopeItem', function ($compile) {
        return {
            restrict: 'E',
            scope : {
                template: '=',
                item: '='
            },
            link: function ($scope, element) {
                element.html($scope.template);
                $compile(element.contents())($scope);
            }
        };
    })
;