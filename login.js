function checkLogin() {
  let currentUser = localStorage.getItem("login");
  console.log(currentUser);
  if (currentUser == "1") {
    document.querySelector(".auth-links").style.display = "none";
    document.getElementById("user").style.display = "flex";
  } else {
    document.getElementById("user").style.display = "none";
    document.querySelector(".auth-links").style.display = "block";
  }
}
window.onload = checkLogin();
function logIn() {
  localStorage.setItem("login", "1");
  console.log(localStorage.getItem("login"));
}
function logOut() {
  localStorage.removeItem("login");
}
