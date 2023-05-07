// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

function loginpage(){
    if(!localStorage.getItem("Users")){
        alert("You Not signed Up, Please Signin First");
    }
    else if(localStorage.getItem("Users")){
       window.location.href = "./login/index.html";
    }
}
document.getElementById("loginlink").addEventListener('click', () =>{
    if(!localStorage.getItem("Users")){
        alert("You Not signed Up, Please Signin First");
    }
    else if(localStorage.getItem("Users")){
        window.location.href = "./login/index.html";
     }
});
function signuppage(){
    window.location.href = "./signup/index.html";
}
function shoppage(){
    if(localStorage.getItem("currentUser")){
        window.location.href = "./shop/index.html";    
    }
  }
shoppage();