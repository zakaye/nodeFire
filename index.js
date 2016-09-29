const firebase = require('firebase');

var bodyParser = require('body-parser');

firebase.initializeApp({
  serviceAccount: "./fireNode-ebd067660d34.json",
  databaseURL:"https://firenode-155ef.firebaseio.com/"
});

var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 5000;

app.set("port", port);


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.post("/secretData", function(req, res){
  firebase.auth().verifyIdToken(req.body.idToken).then(function(decodedToken) {
    var uid = decodedToken;
    console.log(uid);
    // So far you are returning secret data to ANYONE who is logged in
    res.send("Secret DATA!!! You got it!!!");
  }).catch(function(error) {
    res.send("No secret data for you!");
  });
});

app.get("/*", function(req,res){
  console.log("We have requested ", req.params[0]);
  var file = req.params[0] || "/index.html";
  res.sendFile(path.join(__dirname,"./public/", file));
});

app.listen(app.get("port"), function(){
  console.log("Listening on port: ", app.get("port"));
});
