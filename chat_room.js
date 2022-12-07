var firebaseConfig = {
    apiKey: "AIzaSyC4mPMArbgZQ_Hai4nW2_72g_cHR_fk7W8",
    authDomain: "let-s-chat-4e6cf.firebaseapp.com",
    databaseURL: "https://let-s-chat-4e6cf-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-4e6cf",
    storageBucket: "let-s-chat-4e6cf.appspot.com",
    messagingSenderId: "538514097736",
    appId: "1:538514097736:web:17767480a70b70c487fa7d"
  };


  firebase.intializeApp(firebaseConfig);

  user_name=  localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html"; 
}

function adddRoom()
{
      document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class ='room_name' id ="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}