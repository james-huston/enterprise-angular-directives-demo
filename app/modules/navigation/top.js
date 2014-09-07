(function (angular, undefined) {

angular.module('MainApp')
  .directive('apTopNavigation', function () {
    return {
      restrict: 'E',

      templateUrl: '/modules/navigation/top.tpl.html',

      controller: function ($scope) {
        // simple function to toggle our right panel for us.
        $scope.toggleRightPanel = function () {
          $scope.showRightPanel = !$scope.showRightPanel;
        };
      },

      link: function () {
        console.log('navigation linker');
      }
    };
  });

})(window.angular);