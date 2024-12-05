 
let loginBtn = document.getElementById("login_btn");
let signUpBtn = document.getElementById("signup_btn");
let signUpPage = document.getElementById("signup");
let logInPage = document.getElementById("login");
 
signUpBtn.addEventListener('click', (e) => {
    let email = document.getElementById("signup_email").value;
    let password = document.getElementById("signup_password").value;
 
    if(localStorage.getItem(email)) {
        alert("Email already registered!");
        return;
    } 
    localStorage.setItem(email, password);
    alert("Signup successful!"); 
    signUpPage.style.display = "none";
    logInPage.style.display = "block";
}); 
loginBtn.addEventListener('click', (e) => {
    let email = document.getElementById("login_email").value;
    let password = document.getElementById("login_password").value; 
    if(localStorage.getItem(email) === password) {
        alert("Login successful!"); 
    } else {
        alert("Invalid email or password!");
    }
});
