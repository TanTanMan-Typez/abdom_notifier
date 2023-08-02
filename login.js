//firebase database
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO-E4wi_rFFFIt0mBp_ziGqdCtitvQf0s",
  authDomain: "abdom-notifier-real.firebaseapp.com",
  projectId: "abdom-notifier-real",
  storageBucket: "abdom-notifier-real.appspot.com",
  messagingSenderId: "464010514319",
  appId: "1:464010514319:web:1ab21c497af696ac96c5fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//variables
var check_ticked = false;

//check if credentials are valid
function login()
{
    if (document.getElementById("checkbox").checked == true)
    {
        if (document.getElementById("email").value != "" && document.getElementById("email").value == localStorage.getItem("email"))
        {
            if (document.getElementById("email").value != "" && document.getElementById("password").value == localStorage.getItem("password"))
            {
                window.location.href = "../Home Page/home.html";
            } else {
                alert("Invalid Password");
                document.getElementById("password").style.backgroundColor = "rgba(255, 0, 0, 0.9)";
            }
        } else {
            alert("Invalid Email");
            document.getElementById("email").style.backgroundColor = "rgba(255, 0, 0, 0.9)";
        }
    } else {
        alert("Please accept the Terms & Conditions");
    }
}

//tick checkbox when label is clicked
function tickbox()
{
    if (check_ticked == false)
    {
        check_ticked = true;
        document.getElementById("checkbox").checked = true;
    } else {
        check_ticked = false;
        document.getElementById("checkbox").checked = false;
    }
}

//change check_ticked value when the checkbox is clicked
function checked()
{
    check_ticked = document.getElementById("checkbox").checked;
    console.log(check_ticked);
}

//set inputs back to white on editted
function editted()
{
    document.getElementById("email").style.backgroundColor = "rgba(255, 255, 255, 1)";
    document.getElementById("password").style.backgroundColor = "rgba(255, 255, 255, 1)";
}