var app = angular.module("sampleApp", ["firebase"]);
app.controller("SampleCtrl", function($scope, $firebaseArray, $firebaseAuth, $http) {
  var auth = $firebaseAuth();

  console.log(auth);

  $scope.secretData = "Log in to get some secret data."

  $scope.logIn = function login(){
    auth.$signInWithPopup("google").then(function(firebaseUser) {
      console.log("Signed in as:", firebaseUser.user.displayName);
      firebaseUser.user.getToken(/* forceRefresh */ true).then(function(idToken) {
        // Send token to your backend
        $http({
          method: 'GET',
          url: '/secretData',
          headers: {
            id_token: idToken
          }
        }).then(function(response){
          $scope.secretData = response.data;
        });
      }).catch(function(error) {
        // Handle error
        $scope.secretData = error;
      });
    }).catch(function(error) {
      console.log("Authentication failed: ", error);
    });
  };

  auth.$onAuthStateChanged(function(){
    var ref = firebase.database().ref().child("messages");
    // create a synchronized array
    $scope.messages = $firebaseArray(ref);
    // add new items to the array
    // the message is automatically added to our Firebase database!
    $scope.addMessage = function() {
      $scope.messages.$add({
        text: $scope.newMessageText
      });
    };
    // click on `index.html` above to see $remove() and $save() in action

    // can we get back to our server?

  });

  $scope.logOut = function(){
    auth.$signOut(function(){
      console.log('Logged out!');
    })
    $scope.secretData = "Log in to get some secret data."
  };

});
