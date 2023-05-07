const mailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginbut = document.getElementById("login");

loginbut.addEventListener('click', checkInputs);

function checkInputs() {
    const storedusers = JSON.parse(localStorage.getItem("users"));
    const email = mailInput.value;
    const password = passwordInput.value;

    if (!storedusers) {
        document.getElementById("alert-msg").innerHTML = "No user data found. Please Sigup first";
        window.location.href = "../signup/index.html";
        return;
    }

    const currentUser = storedusers.find(user => user.email === email && user.password === password);
    if (currentUser) {
        const token = generateToken(16);
        currentUser.token = token;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        window.location.href = "../shop/index.html";
    } else {
        alert("Incorrect email or password.");
    }
}   

function generateToken(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|\\;:\"<>,.?/~";
    let token = "";
    for (let i = 0; i < length; i++) {
      token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
  }