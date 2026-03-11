let username = prompt("Username:");
let password = prompt("Password:");

if (username === "admin" && password === "1234") {
    alert("Login Successful");
    console.log("Login Successful");
} else {
    alert("Invalid Username or Password");
    console.log("Invalid Username or Password");
}