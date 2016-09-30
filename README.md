# nodeFire
AngularFire with token authentication on node backend server

## Running Locally
* Run these commands to add the project locally
```shell
$ git clone https://github.com/LukeSchlangen/nodeFire
$ cd nodeFire
$ npm install
```
* Create a free Firebase account at https://firebase.google.com
* Create a project from your Firebase account console
* Click the “Add Firebase to your web app” icon
  * Copy the contents WITHOUT SCRIPT TAGS from the resulting popup into `public/config.js`. It should look like:
```javascript
  // Initialize Firebase
  var config = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXX.firebaseapp.com",
    databaseURL: "https://XXXXXXXXXXXX.firebaseio.com",
    storageBucket: "XXXXXXXXXXXX.appspot.com",
    messagingSenderId: "XXXXXXXXXX"
  };
  firebase.initializeApp(config);
```
* Follow the instructions in the first section `Add Firebase to your app` at this link to add firebase service account to your backend https://firebase.google.com/docs/server/setup#add_firebase_to_your_app
  * Rename the new json file to `firebase-service-account.json` and save it in the `server` folder of you application
* Configure google as an authentication provider for your Firebase project:
  * Firebase Console for Project -> Click Auth in Left Panel -> Click Set Up Sign-In Method Button -> Select Google -> Click the edit icon -> Toggle google to `on`
* Run `npm start` to run your application on `localhost:5000`
