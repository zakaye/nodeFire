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
  * Copy the contents from the resulting popup into `public/config.js`. It should look like:
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
* Follow the instructions at this link to add firebase service account to your backend https://firebase.google.com/docs/server/setup#add_firebase_to_your_app
  * Rename the new json file to `firebase-service-account.json` and save it in the `server` folder
* Configure google as an authentication provider for your Firebase project:
  * Firebase Console -> Authentication -> Add Provider -> Toggle Google
* Run `npm start` to run your application
