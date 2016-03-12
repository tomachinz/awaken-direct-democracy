//Users = new Mongo.Collection("users");
UsersList = Meteor.users;



let getContactEmail = function (user) {
  if (user.emails && user.emails.length)
    return user.emails[0].address;

  if (user.services && user.services.facebook && user.services.facebook.email)
    return user.services.facebook.email;

  return null;
};

Meteor.methods({
  banana: function (partyId, userId) {},
  apples: function (partyId, rsvp) {}
});


Meteor.publish('thisNameDoesNotMatter', function () {
  var self = this;
  var handle = Meteor.users.find({}, {
    fields: {emails: 1, profile: 1}
  }).observeChanges({
    added: function (id, fields) {
      self.added('thisNameMatters', id, fields);
    },
    changed: function (id, fields) {
      self.changed('thisNameMatters', id, fields);
    },
    removed: function (id) {
      self.removed('thisNameMatters', id);
    }
  });

  self.ready();

  self.onStop(function () {
    handle.stop();
  });

});
