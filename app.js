// ===----Problem 01------===================================================
// What will be the output of the following code and why?

function scopeTest() {
    if (true) {
        var varVariable = "I am var";
        let letVariable = "I am let";
        const constVariable = "I am const";
    }
    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
}

scopeTest();

// Output
// The first console.log(varVariable); will output: I am var.
// The second console.log(letVariable); will cause a ReferenceError.

// Explanation
// 1. var Declaration:

// var declarations are function-scoped. This means that varVariable is accessible anywhere within the scopeTest function, including outside the if block.
// 2. let and const Declarations:

// let and const declarations are block-scoped. This means letVariable and constVariable are only accessible within the if block where they are declared.

// ===----Problem 02------===================================================
// Write a function greet that takes two parameters, name and greeting.greeting should have a default value of Hello". If only the name is provided, the function should return the greeting followed by the name. If both are provided,it should return the custom greeting followed by the name.

function greet(name, greet = "Hello") {
    return greet + " " + name;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"

// ===----Problem 03------===================================================
//  Write a function sum that takes any number of arguments and returns their sum using the rest parameter.

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(5)); // 5

// ===----Problem 04------===================================================
// Given the following arrays, use the spread operator to merge them into a new array

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergedArray = [...array1, ...array2, ...array3];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// ===----Problem 05------===================================================
// Write an object person using the object literal syntax extensions.The object should have properties name and age, and a method greet that returns a greeting message.

const person = {
    name: "John Doe",
    age: 30,
    greet() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    },
};

console.log(person.greet()); // Hi, my name is John Doe and I am 30 years old.

// ===----Problem 06------===================================================
// Write a for...of loop to iterate over the following array and print each element to the console.

const fruits = ["apple", "banana", "cherry"];
for (const element of fruits) {
    console.log(element);
}

// ===----Problem 07------===================================================
// Use template literals to create a string that includes variables name and age.

const name = "Alice";
const age = 25;

const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // "My name is Alice and I am 25 years old."

// ===----Problem 08------===================================================
// You have an array of objects representing students and their grades. Use a for...of loop to iterate over the array and print each student's name and grade.

const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 },
];

for (const student of students) {
    console.log(`Name: ${student.name}, Grade: ${student.grade}`);
}

// ===----Problem 09------===================================================
// You have a nested array of numbers. Use a for...of loop to iterate over each inner array and print the sum of its elements.
const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (const innerArray of nestedArrays) {
    let sum = 0;
    for (const number of innerArray) {
        sum += number;
    }
    console.log(`Sum of [${innerArray}] is ${sum}`);
}

// ===----Problem 10------===================================================
// Use template literals to create a string that includes variables a and b, as well as the result of their addition.
const a = 5;
const b = 10;

const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // "The sum of 5 and 10 is 15."
