// RANDOM NUMBER GENERATOR

const mybutton = document.getElementById("my-button");

const mylabel = document.getElementById("my-label");

const min = 1;
const max = 10;

let randomnum;

mybutton.onclick = function(){
    randomnum = Math.floor(Math.random()* max) + min;
    mylabel.textContent = randomnum;
}