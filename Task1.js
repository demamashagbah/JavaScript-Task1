// task one
let op = prompt("Enter operation (+, -, *, /):");
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let result;

if (op === "+") {
    result = num1 + num2;
} else if (op === "-") {
    result = num1 - num2;
} else if (op === "*") {
    result = num1 * num2;
} else if (op === "/") {
    result = num1 / num2;
}

console.log(result);
document.write(`${num1} ${op} ${num2} = ${result}`);

//task two
let mark =80;
let grade;
if(mark<= 50){
    grade="fail";
}
else if(50<mark<59){
    garde="D";
}
else if (60<=mark<69){
    grade="C";
}
else if(70<=mark<79){
    grade="B";
}
else if (80<=mark<89){
    grade="A";
}
else if(90<=mark<100){
    grade="A+";
}

document.writeln("Your Grade"+grade);

//task 3
const pi=3.14;
const PI = 3.14159;
let radius = 5;
let area = PI * (radius ** 2);

console.log("Area of the circle is: " + area);

//task 4
let x = Number(prompt("Enter x:"));
let y = Number(prompt("Enter y:"));

if (x > y) {
    let msg = "Hello World";
    alert(msg);
    console.log(msg);
    document.write(msg);
} else {
    let msg = "Goodbye";
    alert(msg);
    console.log(msg);
    document.write(msg);
}

//task5

let val1 = prompt("Enter first number:");
let val2 = prompt("Enter second number:");

let n1 = Number(val1);
let n2 = Number(val2);

let sum = n1 + n2;
let mult = n1 * n2;

console.log("Sum = " + sum);
document.write("Multiplication = " + mult);

//task6

let name = prompt("Enter Name:");
let age = prompt("Enter Age:");
let city = prompt("Enter City:");

let result = `Hello ${name}! You are ${age} years old and you live in ${city}.`;

console.log(result);
document.write(result);
alert(result);


