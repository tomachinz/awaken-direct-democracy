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
