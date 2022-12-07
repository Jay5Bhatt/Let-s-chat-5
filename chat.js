// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyC4mPMArbgZQ_Hai4nW2_72g_cHR_fk7W8",
    authDomain: "let-s-chat-4e6cf.firebaseapp.com",
    databaseURL: "https://let-s-chat-4e6cf-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-4e6cf",
    storageBucket: "let-s-chat-4e6cf.appspot.com",
    messagingSenderId: "538514097736",
    appId: "1:538514097736:web:17767480a70b70c487fa7d"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



