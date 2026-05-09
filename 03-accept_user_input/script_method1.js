// User input using a prompt

let username;

//pop-up box appears
username = window.prompt("whats's your name?");

//display output on webpage
document.getElementById('result').textContent = `Hello ${username}`;