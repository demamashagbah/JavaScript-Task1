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
document.writeln(`${num1} ${op} ${num2} = ${result}`);

