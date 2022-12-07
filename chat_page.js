var firebaseConfig = {
    apiKey: "AIzaSyC4mPMArbgZQ_Hai4nW2_72g_cHR_fk7W8",
    authDomain: "let-s-chat-4e6cf.firebaseapp.com",
    databaseURL: "https://let-s-chat-4e6cf-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-4e6cf",
    storageBucket: "let-s-chat-4e6cf.appspot.com",
    messagingSenderId: "538514097736",
    appId: "1:538514097736:web:17767480a70b70c487fa7d"
  };

  function updateLike(message_id)
{
 console.log("clicked on like button - " + message_id);
   button_id = message_id;
   likes = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 1;
   console.log(updated_likes);

   firebase.database().ref(room_name).child(message_id).update({
       like : updated_likes  
    });

}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }

firebase.intializeApp(firebaseConfig);

       function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
//Start code
        console.log(firebase_message_id);
          console.log(message_data);
          name = message_data['name'];
          message = message_data['message'];
        like = message_data['like'];
        name_with_tag = "<h4> "+ name +"</h4>";
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>Likes :"+ like +"</button>";
       
        row = name_with_tag + message_with_tag +like_button;       
       document.getElementById("output").innerHTML += row;
//End code
     } });  }); }
getData();



