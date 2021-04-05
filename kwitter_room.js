var firebaseConfig = {
    apiKey: "AIzaSyDb_lcjd5NE0SwCnPNjKNcOm6tSCdmGCq4",
    authDomain: "chatroom-89b49.firebaseapp.com",
    projectId: "chatroom-89b49",
    storageBucket: "chatroom-89b49.appspot.com",
    messagingSenderId: "857219657270",
    appId: "1:857219657270:web:b9224c8cf579cdadd0b297"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
