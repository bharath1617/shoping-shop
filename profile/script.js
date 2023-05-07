const storedUsers = JSON.parse(localStorage.getItem("users"));
const storedCurrentUser = JSON.parse(localStorage.getItem("currentUser"));

const firstNameShow = document.getElementById("first-name");
const lastNameShow = document.getElementById("last-name");

if (storedCurrentUser) {
  firstNameShow.value = storedCurrentUser.name;
  lastNameShow.value = storedCurrentUser.lastname;
}
const passchange = document.getElementById("Change-pass");
passchange.addEventListener("click", () => {
  const oldPass = document.getElementById("old-password").value;
  const newPass = document.getElementById("new-password").value;
  const confirmPass = document.getElementById("confirm-password").value;
  
  if(oldPass === newPass){
    alert("old password and new password are same");
        return;
  }
  
  if(oldPass === storedCurrentUser.password){
    if (newPass !== confirmPass) {
        alert("New password and confirm password do not match");
        return;
    }
    else{
        storedCurrentUser.password = newPass;
        const usersindex = storedUsers.findIndex(user => user.email === storedCurrentUser.email);
        storedUsers[usersindex] = storedCurrentUser;

        localStorage.setItem("users", JSON.stringify(storedUsers));
        localStorage.setItem("currentUser", JSON.stringify(storedCurrentUser));
    }
   }
    else{
      alert("Incorrect old password");
      return;
    }
  alert("Password updated successfully!");
});

function logout() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    delete currentUser.token;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.removeItem("currentUser");
    firstNameShow.value = "";
    lastNameShow.value = "";
    window.location.href = "../login/index.html";
}
