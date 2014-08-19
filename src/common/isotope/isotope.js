angular.module('angulaReminders.isotope', [])
    .directive('isotopeContainer', function ($timeout) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'isotope/isotope.tpl.html',
            scope : {
                itemTemplate: '=',
                items: '=',
                isotopeOptions: '=',
                trackBy: '@'
            },
            link: function ($scope, element) {
                var isotopeOptionsOverrides = {
                    itemSelector: '.item',
                    layoutMode: 'fitRows'
                };

                var isotopeOptions = angular.copy($scope.isotopeOptions);
                if (isotopeOptions == null) {
                    isotopeOptions = {};
                }
                
                angular.extend(isotopeOptions, isotopeOptionsOverrides);
                element.isotope(isotopeOptions);

                $scope.$watch('items', function () {
                    $timeout(function () {
                        element.isotope('reloadItems');
                        element.isotope();
                    }, 0, false);                    
                }, true);

                var useTrackBy = function() {
                    return $scope.trackBy != null &&
                        $scope.items != null &&
                        $scope.items.length > 0 &&
                        $scope.items[0][$scope.trackBy] != null;
                };

                $scope.getTrackBy = function(item, defaultId) {
                    if (useTrackBy()) {
                        return item[$scope.trackBy];
                    } else {
                        return defaultId;
                    }
                };
            }
        };
    })
    .directive('isotopeItem', function ($compile) {
        return {
            restrict: 'EA',
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