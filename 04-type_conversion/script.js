//Type Conversion

//STRING TO NUMBER
let age = window.prompt("how old are you?");

//Convert string to number
age = Number(age);

// ADD 1
age += 1;

document.getElementById("p1").textContent = `Next year you will be ${age}`;

//NUMBER TO STRING
let num = 100;

//Convert number to string
num = String(num);

document.getElementById("p2").textContent = `Value : ${num}`;


// STRING TO BOOLEAN
let loggedIn = "true";

loggedIn = Boolean(loggedIn);

document.getElementById("p3").textContent = `Logged In: ${loggedIn}`; 

//CHECKING THE DATA TYPES
document.getElementById("p4").textContent = `Type of age : ${typeof age}`;