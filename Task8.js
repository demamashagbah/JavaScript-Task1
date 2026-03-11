let userAge = Number(prompt("Enter your age:"));
let category;

if (userAge < 13) {
    category = "Child";
} else if (userAge <= 19) {
    category = "Teenager";
} else if (userAge <= 59) {
    category = "Adult";
} else {
    category = "Senior";
}

alert(`You are an ${category}`);
console.log(`You are an ${category}`);