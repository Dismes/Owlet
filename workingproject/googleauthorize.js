var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');


var SCOPES = ['https://www.googleapis.com/auth/calendar'];




function returnOath(token, cb) {


    fs.readFile('client_secret.json', function processClientSecrets(err, content) {
        var oath;

        if (err) {
            console.log('Error loading client secret file: ' + err);
            return;
        }
        // Authorize a client with the loaded credentials, then call the
        // Google Calendar API.
        authorize(JSON.parse(content), token, cb);

    });

}


function authorize(credentials, token, cb) {
    var clientSecret = credentials.installed.client_secret;
    var clientId = credentials.installed.client_id;
    var redirectUrl = credentials.installed.redirect_uris[0];
    var auth = new googleAuth();
    var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

    fs.readFile(token, function (err, token) {
        
            oauth2Client.credentials = JSON.parse(token);
            cb(oauth2Client);
        });
      

    }

    module.exports = {
        returnOath
    }
