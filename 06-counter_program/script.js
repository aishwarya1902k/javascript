//COUNTER Program

const decreasebutton = document.getElementById("decrease-button");

const resetbutton = document.getElementById("reset-button");

const increasebutton = document.getElementById("increase-button");

const countlabel = document.getElementById('count-label');

let count = 0;

//INCREASE BUTTON 
increasebutton.onclick = function(){
    count++;
    countlabel.textContent = count;
}

//DECREASE BUTTON
decreasebutton.onclick = function(){
    count--;
    countlabel.textContent = count;
}

//RESET BUTTON
resetbutton.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
