/* console.log("LET & CONST");
let variable = "test";
console.log(variable);
variable = "another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; // Won't work

// Block scope
function reset() {
    // console.log(variable);
    let variable = null;
    console.log(variable);
}

reset();
console.log(variable);

// Arrows Functions
console.log("ARROW FUNCTIONS");
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2;
}
console.log(addNumbers(10, 3));

const multiplyNumbers1 = (number1: number, number2: number) => {
    return number1 * number2;
}

const multiplyNumbers2 = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers2(10, 3));

const greet = () => {
    console.log("Hello");
}
greet();

const greetFriend = friend => console.log(friend);
greetFriend("Manu");

// Default parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): void => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
}
countdown(20);

// Rest & Spread
console.log("REST & SPREAD");

const numbers: number[] = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
console.log(Math.max(...numbers));

function makeArray(...args: number[]) {
    return args;
}
console.log(makeArray(1, 2, 6));

// Destructuring Arrays
console.log("DESTRUCTURING ARRAYS");
const myHobbies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData = {
    userName: 'Or',
    age: 33
}

const { userName: myName1, age: myAge } = userData;
console.log(myName1, myAge);

// Template Literals
console.log("TEMPLATE LITERALS");
const userName = 'Or';
const greeting = `This is a heading!
I'm ${userName}.
This is cool!`;
console.log(greeting); */
// Exercise 1 - Maybe use an Arrow Function?
console.log("EXERCISE");
/* var double = function(value) {
    return value * 2;
};
console.log(double(10));

const doubleNumbers = (val: number) => val * 2;
console.log(doubleNumbers(20)); */
// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === void 0) { name = 'Or'; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// const makeArray = (...args: number[]) => args;
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
/* var testResults = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;
console.log(result1, result2, result3); */
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
/* var firstName = scientist.firstName;
var experience = scientist.experience; */
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
