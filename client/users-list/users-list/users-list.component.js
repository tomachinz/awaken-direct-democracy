let {Component, View, SetModule, Inject, MeteorReactive, LocalInjectables} = angular2now;

SetModule('socially');

@Component({selector: 'users-list'})
@View({
  templateUrl: () => {
    if (Meteor.isCordova) {
      return '/packages/socially-mobile/client/users-list/users-list/users-list.html';
    }

    return '/packages/socially-browser/client/users-list/users-list/users-list.html';
  }
})
@Inject('$mdDialog', '$filter')
@MeteorReactive
@LocalInjectables

class usersList {
  constructor() {
    this.perPage = 10;
    this.page = 1;
    this.sort = {
      name: 1
    };
    this.orderProperty = '1';
    this.searchText = 'usersList Class';

    this.helpers({
      parties: this._partiesCollection,
      users: this._usersCollection,
      isLoggedIn: this._isLoggedIn,
      currentUserId: this._currentUserId,
      images: this._imagesCollection
    });
    // this.subscribe('images');
    this.subscribe('users');
    // this.subscribe('parties', this._partiesSubscription.bind(this));
    // this.defineMapProperties();
  }
  _imagesCollection() {
    return Images.find({});
  }
  _currentUserId() {
    return Meteor.userId();
  }
  _isLoggedIn() {
    return Meteor.userId() !== null;
  }
  _usersCollection() {
    return Meteor.users.find({});
  }
  updateSort() {
    this.sort = {
      name: parseInt(this.orderProperty)
    }
  }
  getUserById(userId) {
    return Meteor.users.findOne(userId);
  }
  getMainImage(images, onlyUrl) {
    if (images && images.length && images[0] && images[0]) {
      var url = this.$filter('filter')(this.images, {_id: images[0]})[0].url();
      if (onlyUrl) {
        return url;
      }
      return {
        'background-image': 'url("' + url + '")'
      }
    }
  }
}
