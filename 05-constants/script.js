//CONSTANTS

const PI = 3.14159;

let radius;
let circumference;

document.getElementById('submit-button').onclick = function(){
    radius = document.getElementById("radius-input").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("result").textContent = `Circumference : ${circumference}`;

}