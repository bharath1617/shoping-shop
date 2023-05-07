let detailsArray = [];

// document.getElementById("signlink").addEventListener('click', (event) => {
//     document.getElementById("signup").style.display = 'block';
//     document.getElementById("profile").style.display = 'none';
// });

document.getElementById("profilelink").addEventListener('click', (event) => {
    displayProfile();
});

function addelements() {
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("Lastname").value;
    let email = document.getElementById("mail").value;
    let password = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirm-pass").value;

    if (name === "" ||lastname === "" || email === "" || password === "" || confirmPass === "") {
        document.getElementById("succ-err").innerHTML = "Error: All fields are mandatory";
        document.getElementById("succ-err").style.color = "red";
        return;
    } else if (password !== confirmPass) {
        document.getElementById("succ-err").innerHTML = "Error: Passwords do not match";
        document.getElementById("succ-err").style.color = "red";
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let checkemail = users.some(user => user.email === email);
    if(checkemail){
        document.getElementById("succ-err").innerHTML = "Check Email, given email is already used";
        document.getElementById("succ-err").style.color = "red";
        return;
    }
    let newuser = {
        name: name,
        lastname: lastname,
        email: email,
        password: password
    };

    users.push(newuser);
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("succ-err").innerHTML = "Successfully signed up!";
    document.getElementById("succ-err").style.color = "green";
 
    setTimeout(() => {
        displayProfile();
    }, 1000);
    
    window.location.href = "../login/index.html";
   
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm-pass").value = "";
}


