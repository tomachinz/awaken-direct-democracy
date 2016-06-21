// var google = require('googleapis');

// ONCE UPDATED THIS FILE IS NORMALLY STORED ONE FOLDER HIGHER ABOVE THE REPOSITORY
// THIS IS TO AVOID THE FILE BEING ACCIDENTALLY CHECKED INTO VERSION CONTROL (GITHUB)
// For example move it to here:
// /Users/tom/GitHub/private/config.js
// From the current location here:
// /Users/tom/GitHub/awaken-direct-democracy/private/config-example.js

var CLIENT_ID = "[REPLACE WITH YOUR GOOGLE CLIENT ID]";
var CLIENT_SECRET = "[REPLACE WITH GOOGLE CLIENT SECRET]";
var REDIRECT_URL = "http://27.funk.nz/google-oauth";

  // first, remove configuration entry in case service is already configured
  ServiceConfiguration.configurations.remove({
    service: "google"
  });
  alert("CLIENT_ID is set to: " + CLIENT_ID)
  ServiceConfiguration.configurations.insert({
    service: "google",
    clientId: CLIENT_ID,
    secret: CLIENT_SECRET,
    loginStyle: "popup"
  });


  // var OAuth2 = google.auth.OAuth2;
  //
  // var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
  //
  // // generate a url that asks permissions for Google+ and Google Calendar scopes
  // var scopes = [
  //   'https://www.googleapis.com/auth/plus.me',
  //   'https://www.googleapis.com/auth/calendar'
  // ];
  //
  // var url = oauth2Client.generateAuthUrl({
  //   access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
  //   scope: scopes // If you only need one scope you can pass it as string
  // });
