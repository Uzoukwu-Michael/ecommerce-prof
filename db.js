let userDb = [];
let loggedInUserId = 0;
let adminDb = [];
let loggedInUserCode = 0;
let cartDb = [];
let productDb = [];
const notification = document.getElementById("message");

// handle loggedInId db
if (sessionStorage.getItem("loggedInUserId") == null) {
  sessionStorage.setItem("loggedInUserId", JSON.stringify(loggedInUserId));
} else {
  loggedInUserId = JSON.parse(sessionStorage.getItem("loggedInUserId"));
}

// handle loggedIn usercode
if (sessionStorage.getItem("loggedInUserCode") == null) {
  sessionStorage.setItem("loggedInUserCode", JSON.stringify(loggedInUserCode));
} else {
  loggedInUserCode = JSON.parse(sessionStorage.getItem("loggedInUserCode"));
}

// handle user db
if (localStorage.getItem("user") === null) {
  localStorage.setItem("user", JSON.stringify(userDb));
} else {
  userDb = JSON.parse(localStorage.getItem("user"));
}

// handle for admin db
if (localStorage.getItem("adminDb") === null) {
  localStorage.setItem("adminDb", JSON.stringify(adminDb));
} else {
  adminDb = JSON.parse(localStorage.getItem("adminDb"));
}


//notification function
function showMessage(mes, kolor) {
  notification.textContent = mes;
  notification.style.backgroundColor = kolor;
  notification.style.display = "block";

  setTimeout(function () {
    notification.style.display = "none";
  }, 3000);
}