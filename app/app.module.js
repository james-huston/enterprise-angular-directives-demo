(function (angular, undefined) {

  angular.module('MainApp', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'modules/main/index.tpl.html',
          controller: 'MainController'
        });
    })

    .controller('AppController',
      function ($scope) {
        console.log('app controller');

        $scope.contact = {
          firstName: 'Fred',
          lastName: 'Flintstone'
        };

        $scope.showRightPanel = false;
      });

})(window.angular);
