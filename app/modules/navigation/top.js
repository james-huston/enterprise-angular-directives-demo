(function (angular, undefined) {

angular.module('MainApp')
  .directive('apTopNavigation', function () {
    return {
      restrict: 'E',

      templateUrl: '/modules/navigation/top.tpl.html',

      scope: true,

      controller: function ($scope, contactService, appState) {
        // simple function to toggle our right panel for us.
        $scope.toggleRightPanel = function () {
          appState.showRightPanel = !appState.showRightPanel;
        };

        $scope.contactService = contactService;
      },

      link: function () {
        console.log('navigation linker');
      }
    };
  });

})(window.angular);
