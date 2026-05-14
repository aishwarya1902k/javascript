// IF STATEMENTS

let age;
document.getElementById("submit-button").onclick = function(){
    age = document.getElementById("age-input").value;
    age = Number(age);

    if (age >=18){
        
        document.getElementById("result").textContent = "Eligible to access the site";

    }

    else{
        document.getElementById("result").textContent = "you must be 18+ to access this site";
    }
}
