(function (angular, undefined) {

angular.module('MainApp')
  .service('contactService', function () {
    return {
      localContact: {
        firstName: undefined,
        lastName: undefined
      },

      set: function set(contact) {
        this.localContact = contact;
      },

      get: function get() {
        return this.localContact;
      }
    };
  });

})(window.angular);
