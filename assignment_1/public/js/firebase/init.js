
if (typeof firebase === 'undefined') 
    throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
    var config = {
        apiKey: "AIzaSyBYhmNd4YCoAXA7XTqa-jUWwzRniJiT8WI",
        authDomain: "gama-assignment-1-d87a1.firebaseapp.com",
        databaseURL: "https://gama-assignment-1-d87a1.firebaseio.com",
        projectId: "gama-assignment-1-d87a1",
        storageBucket: "gama-assignment-1-d87a1.appspot.com",
        messagingSenderId: "1005402279629"
      };
  firebase.initializeApp(config);

//   var dbConnect = firebase.database();