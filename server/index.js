const firebase = require('firebase');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var port = process.env.PORT || 5000;

app.set("port", port);

firebase.initializeApp({
  serviceAccount: "./server/firebase-service-account.json",
  databaseURL:"https://firenode-155ef.firebaseio.com/"
});

app.use(bodyParser.json());

// This is the route for your secretData
app.get("/secretData", function(req, res){

  /* This is where the magic happens. We pull the idtoken off of the request,
  verify it against our private_key, and then we return the decodedToken */
  firebase.auth().verifyIdToken(req.headers.id_token).then(function(decodedToken) {
    /* Whatever you do in here is protected by your authorization.
    WARNING: So far you are returning secret data to ANYONE who is logged in
    there is still more work to be done if you want to implement roles
    You can use the decodedToken and some logic to do that. */

    console.log(decodedToken); // Here you can see the information firebase gives you about the user
    res.send("Secret DATA!!! You got it!!!");
  }).catch(function(error) {
    // If the id_token isn't right, you end up in this callback function
    res.send("No secret data for you!");
  });

});

// Public folder file routing
app.get("/*", function(req,res){
  var file = req.params[0] || "/index.html";
  res.sendFile(path.join(__dirname,"../public/", file));
});

app.listen(app.get("port"), function(){
  console.log("Listening on port: ", app.get("port"));
});
