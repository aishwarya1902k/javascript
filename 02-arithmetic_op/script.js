// ARITHMETIC OPERATIONS

let students = 30;


// Addition
students = students + 1;


// Subtraction
students = students - 1;


// Multiplication
students = students * 2;


// Division
students = students / 2;


// Exponents
students = students ** 2;


// Modulus
let extraStudents = students % 3;


// Displaying the results
document.getElementById("result1").textContent = `Students Value: ${students}`;

document.getElementById("result2").textContent = `Remainder: ${extraStudents}`;



// Increment Operator
let score = 10;

score++;

document.getElementById("result3").textContent = `Incremented Score: ${score}`;



// Decrement Operator
let lives = 5;

lives--;

document.getElementById("result4").textContent = `Lives Left: ${lives}`;



// Operator Precedence
let result = 1 + 2 * 3 + 4 ** 2;

document.getElementById("result5").textContent = `Operator Result: ${result}`;