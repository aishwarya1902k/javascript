//MATH OBJECT

let x = 3.21;
let y = 2;
let z;

//round
z = Math.round(x);

document.getElementById("p1").textContent = `Math.round() : ${z}`;

//floor
z = Math.floor(x);
document.getElementById("p2").textContent = `Math.floor() : ${z}`;

//ceil
z = Math.ceil(x);

document.getElementById("p3").textContent =
`Math.ceil(): ${z}`;



// POWER
z = Math.pow(x, y);

document.getElementById("p4").textContent =
`Math.pow(): ${z}`;



// SQUARE ROOT
z = Math.sqrt(81);

document.getElementById("p5").textContent =
`Math.sqrt(): ${z}`;



// ABSOLUTE VALUE
z = Math.abs(-5);

document.getElementById("p6").textContent =
`Math.abs(): ${z}`;



// MAXIMUM
z = Math.max(1, 5, 10, 20);

document.getElementById("p7").textContent =
`Math.max(): ${z}`;



// MINIMUM
z = Math.min(1, 5, 10, 20);

document.getElementById("p8").textContent =
`Math.min(): ${z}`;
