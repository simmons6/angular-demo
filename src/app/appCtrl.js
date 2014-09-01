function AppCtrl($scope, $location) {
  var viewModel = self;

  $scope.$on('$stateChangeSuccess', function(event, toState) {
    if (angular.isDefined( toState.data.pageTitle)) {
      viewModel.pageTitle = toState.data.pageTitle + ' | angulaReminders';
    }
  });
}

angular.module('angulaReminders')
  .controller('AppCtrl', AppCtrl);