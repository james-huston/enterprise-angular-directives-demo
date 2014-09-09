(function (angular, undefined) {

  angular.module('MainApp', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'modules/main/index.tpl.html',
          controller: 'MainController'
        });
    })

    .controller(
      'AppController',
      function ($scope, contactService) {
        console.log('app controller');

        contactService.set({
          firstName: 'Fred',
          lastName: 'Flintstone'
        });
      });

})(window.angular);
