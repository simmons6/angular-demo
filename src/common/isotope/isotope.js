angular.module('angularDemo.isotope', [])
    .directive('isotopeContainer', function ($timeout) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'isotope/isotope.tpl.html',
            scope : {
                itemTemplate: '=',
                items: '=',
                filter: '='
            },
            link: function ($scope, element) {
                var isotopeFilter = function () {
                    var scope = angular.element(this).scope();
                    while (scope.$parent != null && scope.item == null) {
                        scope = scope.$parent;
                    }
                    return $scope.filter(scope.item);
                };

                var isotopeOptions = {
                    itemSelector: '.item',
                    filter: isotopeFilter
                };
                
                $scope.$watch('filter', function (filter) {
                    element.isotope({ filter: isotopeFilter });
                });

                $scope.$watch('items', function (newItems, oldItems) {
                    $timeout(function () {
                        element.isotope('reloadItems');
                        element.isotope(isotopeOptions);
                    });                    
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
                var template = $($scope.template).addClass('item');
                var compiledTemplate = $compile(template)($scope);
                element.replaceWith(compiledTemplate);
            }
        };
    })
;