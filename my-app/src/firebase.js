import * as firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDLoZUAx5sQ0JwNwB2zPgHtN0su11coGGg",
    authDomain: "management-527af.firebaseapp.com",
    databaseURL: "https://management-527af.firebaseio.com",
    projectId: "management-527af",
    storageBucket: "management-527af.appspot.com",
    messagingSenderId: "569912220334"
  };
  firebase.initializeApp(config);

  export default firebase;