
if (typeof firebase === 'undefined') 
    throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
    var config = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: ""
      };
  firebase.initializeApp(config);

//   var dbConnect = firebase.database();