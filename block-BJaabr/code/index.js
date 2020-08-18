// Look at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
	return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
	return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
	return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

function addOne(number) {
	return (number += 1);
}

// - Write a Function Expression

let addOne = function (number) {
	return (number += 1);
};

// - Write an Arrow Function without curly brackets(if possible)

let addOne = (number) => (number += 1);

// - Write an Arrow Function with curly brackets

let addOne = (number) => {
	return (number += 1);
};

// - Execute the function

addOne(0);

// - Execute the function and store the return value in a variable.

let addedValue = addOne(0);

// - What is the typeof returnValue

// typeof --> "number"

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractOne(number) {
	return (number -= 1);
}

// - Write a Function Expression

let substractOne = function (number) {
	return (number -= 1);
};

// - Write an Arrow Function without curly brackets(if possible)

let substractOne = (number) => (number -= 1);

// - Write an Arrow Function with curly brackets

let substractOne = (number) => {
	return (number -= 1);
};

// - Execute the function

substractOne(20);

// - Execute the function and store the return value in a variable.

let substractValue = substractOne(20);

// - What is the typeof returnValue

// type of -> "number"

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function sum(numA, numB) {
	return !isNaN(numA) && !isNaN(numB)
		? Number(numA) + Number(numB)
		: alert("Enter a Valid Number");
}

// - Write a Function Expression

let sum = function (numA, numB) {
	return !isNaN(numA) && !isNaN(numB)
		? Number(numA) + Number(numB)
		: alert("Enter a Valid Number");
};

// - Write an Arrow Function without curly brackets(if possible)

let sum = (numA, numB) =>
	!isNaN(numA) && !isNaN(numB)
		? Number(numA) + Number(numB)
		: alert("Enter a Valid Number");

// - Write an Arrow Function with curly brackets

let sum = (numA, numB) => {
	return !isNaN(numA) && !isNaN(numB)
		? Number(numA) + Number(numB)
		: alert("Enter a Valid Number");
};

// - Execute the function

sum(20, 15);

// - Execute the function and store the return value in a variable

let sumValue = sum(20, 50);

// - What is the typeof returnValue

// typeof --> "number"

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function square(number) {
	return number ** 2;
}

// - Write a Function Expression

let square = function (number) {
	return number ** 2;
};

// - Write an Arrow Function without curly brackets(if possible)

let square = (number) => number ** 2;

// - Write an Arrow Function with curly brackets

let square = (number) => {
	return number ** 2;
};

// - Execute the function

square(15);

// - Execute the function and store the return value in a variable

let squaredValue = square(15);

// - What is the typeof returnValue

// typeof --> "number"

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

function isGreater(x, y) {
	return x > y ? true : false;
}

// - Write a Function Expression

let isGreater = function (x, y) {
	return x > y ? true : false;
};

// - Write an Arrow Function without curly brackets(if possible)

let isGreater = (x, y) => (x > y ? true : false);

// - Write an Arrow Function with curly brackets

let isGreater = (x, y) => {
	return x > y ? true : false;
};

// - Execute the function

isGreater(5, 2);

// - Execute the function and store the return value in a variable

let isGreaterValue = isGreater(5, 2);

// - What is the typeof returnValue

// typeof --> "Boolean"

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function oddOrEven(number) {
	return number % 2 == 0 ? `Number is even` : `Number is odd`;
}

// - Write an anonymous Function Expression

let oddOrEven = function (number) {
	return number % 2 == 0 ? `Number is even` : `Number is odd`;
};

// - Write an named Function Expression

let oddOrEven = function filterOddorEven(number) {
	return number % 2 == 0 ? `Number is even` : `Number is odd`;
};

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

let oddOrEven = (number) =>
	number % 2 == 0 ? `Number is even` : `Number is odd`;

// - Write an Arrow Function with curly brackets

let oddOrEven = (number) => {
	return number % 2 == 0 ? `Number is even` : `Number is odd`;
};

// - Execute the function

oddOrEven(5);

// - Execute the function and store the return value in a variable

let filteredOddorEven = oddOrEven(5);

// - What is the typeof returnValue

// typeof --> "string"
