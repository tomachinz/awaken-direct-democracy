angular.module("socially.browser").directive('login', function() {
  return {
    restrict: 'E',
    templateUrl: '/packages/socially-browser/client/auth/login/login.html',
    controllerAs: 'login',
    controller: function ($scope, $reactive, $state) {
      $reactive(this).attach($scope);

      this.credentials = {
        email: '',
        password: ''
      };

      this.error = '';

      // Call Meteor.linkWith[ServiceName] in place instead of loginWith. (client side)

      this.login = () => {
        Meteor.loginWithPassword(this.credentials.email, this.credentials.password, (err) => {
          if (err) {
            this.error = err;
          }
          else {
            $state.go('parties');
          }
        });
      };

      // GOOGLE oauth
      this.signInWithGoogle = () => {
        // ON THE CLIENT:
        // Meteor.signInWithGoogle ({}, function (error, mergedUserId) {
        Meteor.linkWithGoogle ({}, function (error, mergedUserId) {

          // mergedUsers is set if a merge occured
          if (mergedUserId) {
            console.log(mergedUserId, 'merged with', Meteor.userId());
          }
        });
      };


      // FAECEBOOK oauth
      this.signInWithFacebook = () => {
        // ON THE CLIENT:
        // Meteor.signInWithGoogle ({}, function (error, mergedUserId) {
        Meteor.linkWithFacebook({}, function (error, mergedUserId) {

          // mergedUsers is set if a merge occured
          if (mergedUserId) {
            console.log(mergedUserId, 'merged with', Meteor.userId());
          }
        });
      };



    }
  }
});
