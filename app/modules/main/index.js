(function (angular, undefined) {

angular.module('MainApp')
  .controller(
    'MainController',
    function ($scope, contactService) {
      console.log('main controller');

      var contacts = {
        '1': {
          firstName: 'Uno',
          lastName: 'Persona'
        },
        '2': {
          firstName: 'Dos',
          lastName: 'Persona'
        }
      };

      $scope.setContact = function (contactId) {
        contactService.set(contacts[contactId.toString()]);
      };
    }
  );

})(window.angular);