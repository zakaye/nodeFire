var app = angular.module("sampleApp", ["firebase"]);
app.controller("SampleCtrl", function($scope, $firebaseArray, $firebaseAuth, $http) {
  var auth = $firebaseAuth();

  $scope.logIn = function login(){
    auth.$signInWithPopup("google").then(function(firebaseUser) {
      console.log("Signed in as:", firebaseUser.user.displayName);
    }).catch(function(error) {
      console.log("Authentication failed: ", error);
    });
  };

  auth.$onAuthStateChanged(function(firebaseUser){
    // firebaseUser will be null if not logged in
    if(firebaseUser) {
      // This is where we make our call to our server
      $http({
        method: 'GET',
        url: '/secretData',
        headers: {
          id_token: firebaseUser.kd
        }
      }).then(function(response){
        $scope.secretData = response.data;
      });
    }else{
      console.log('Not logged in.');
      $scope.secretData = "Log in to get some secret data."
    }

  });

  $scope.logOut = function(){
    auth.$signOut().then(function(){
      console.log('Logging the user out!');
    });
  };
});
