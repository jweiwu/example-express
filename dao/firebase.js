var admin = require('firebase-admin');
var serviceAccount = require('../config/shoppinglist-94810-firebase-adminsdk-j1ju0-eb60c5bcb8.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shoppinglist-94810.firebaseio.com"
});

var database = admin.database();

module.exports = database;