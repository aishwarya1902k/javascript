let username;
document.getElementById("submit-button").onclick = function(){
    username = document.getElementById("my-text").value;

    document.getElementById("welcome-msg").textContent = `Hello ${username}`;

}