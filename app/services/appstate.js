(function (angular, undefined) {

angular.module('MainApp')
  .service('appState', function () {
    return {
      showRightPanel: false
    };
  });

})(window.angular, undefined);