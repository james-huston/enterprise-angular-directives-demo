(function (angular, undefined) {

angular.module('MainApp')
  .directive('apContactForm', function () {

    return {
      restrict: 'E',

      transclude: true,

      scope: {
        myContact: '=contact'
      },

      templateUrl: 'modules/contact/index.tpl.html',

      controller: function () {
        console.log('contact controller');
      },

      link: function () {
        console.log('contact link');
      }
    };

  });

})(window.angular);