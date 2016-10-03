# nodeFire
AngularFire with token authentication on node backend server

## Get Started with nodeFire
1. Run these commands to add the project locally:
```shell
$ git clone https://github.com/LukeSchlangen/nodeFire
$ cd nodeFire
$ npm install
```
2. Create a free Firebase account at https://firebase.google.com
![Alt text](/imgs/firebasemain.jpg?raw=true "Optional Title")
![Alt text](/imgs/click.jpg?raw=true "Optional Title")
3. Create a project from your Firebase account console
![Alt text](/imgs/createnew.jpg?raw=true "Optional Title")
![Alt text](/imgs/create2.jpg?raw=true "Optional Title")
4. Click the “Add Firebase to your web app” icon
![Alt text](/imgs/addfire.jpg?raw=true "Optional Title")
![Alt text](/imgs/script.jpg?raw=true "Optional Title")
  * Copy the contents WITHOUT SCRIPT TAGS or the CDN from the resulting popup into `public/config.js`. It should look like this:
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
5. Follow the instructions in [Add Firebase to your App](https://firebase.google.com/docs/server/setup#add_firebase_to_your_app) to add a Firebase service account to your backend
![Alt text](/imgs/guide1.jpg?raw=true "Optional Title")
  * Rename the new JSON file to `firebase-service-account.json` and save it in the `server` folder of your application
6. Configure Google as an authentication provider for your Firebase project.
+ In the Firebase console for your project, click "Auth" in left panel

![Alt text](/imgs/auth.jpg?raw=true "Optional Title")
+ Click "Set Up Sign-In Method" button

![Alt text](/imgs/signin.jpg?raw=true "Optional Title")
+ Select "Google"

![Alt text](/imgs/google.jpg?raw=true "Optional Title")
+ Click the "edit" icon
+ Enable Google

![Alt text](/imgs/enable.jpg?raw=true "Optional Title")

Now, run `npm start` to run your application on `localhost:5000` and its ready to go!

