let {Component, View, SetModule, Inject, MeteorReactive} = angular2now;

SetModule('awaken');

@Component({selector: 'awaken'})
@View({templateUrl: () => {
  if (Meteor.isCordova) {
    return '/packages/awaken-mobile/client/awaken/awaken.html';
  }
  else {
    return '/packages/awaken-mobile/client/awaken/awaken.html';
  }
}})
@MeteorReactive
class awaken {
  constructor() {
    this.helpers({
      isLoggedIn: this.isLoggedIn,
      currentUser: this.currentUser
    });
  }

  currentUser() {
    return Meteor.user();
  }

  isLoggedIn() {
    return Meteor.userId() !== null;
  }

  logout() {
    Accounts.logout();
  }
}
