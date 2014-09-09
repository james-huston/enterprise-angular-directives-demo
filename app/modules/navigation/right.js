(function (angular, undefined) {

angular.module('MainApp')
  .directive('apRightNavigation', function (contactService) {
    return {
      restrict: 'E',

      templateUrl: '/modules/navigation/right.tpl.html',

      scope: true,

      controller: function ($scope, appState) {
        console.log('right nav controller', $scope.showRightPanel);

        $scope.contactService = contactService;
        $scope.appState = appState;
      },

      link: function () {
        console.log('right nav link');
      }
    };
  });

})(window.angular);
