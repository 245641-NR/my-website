// this is a single-line comment and is ignored by the browser

/*
This is a
multi-line
comment
*/

//cmd+forward slash toggles the comment-out option

console.log("hello world")       // same as print() in python - text goes in ""
console.warn("Be careful")
console.error("this is an error message")

// write a script that logs your name, age,
// and customized warning and error messages. 
console.log("Name: Natalie")
console.log("Age: 17")
console.warn("DO NOT DISTURB BEFORE 7AM")
console.error("COULDN'T COMPUTE REQUEST. Reason: Current time: 6:55AM")
// to put quotes INSIDE text, use forward slash


// Strings
// if number is inside quotes it doesnt have numerical value
console.log("10") 
console.log("Portland High School")

// Numbers
console.log(10)
console.log(10.54)

// Booleans
console.log(true)
console.log(false)

// Checking Data Types using "typeof" property
console.log(typeof true) // boolean
console.log(typeof 10) // number
console.log(typeof "hello") // string

// variables are used to store values for later use 
// first word is lowercase - all remaining start with capital
//^^ also called Camel Case
// must choose "let" (the value may change) or 
// "const" (the value will remain the same)

const schoolName = "Portland High School"
let middleSchool = "King MS"
console.log(schoolName)
console.log(middleSchool) 

middleSchool = "Lincoln MS"

console.log(schoolName)
console.log(middleSchool)

// Interactice User Input

// alert("Message"). -> creates a popup window with message in it
// alert("Welcome to my website")

// const response = Input(message). -> creates a popup with message and an entry widget
// const userName = "Nat" // prompt("What is your name?")
const favoriteFood = "Lasagna" // prompt("What is your favorite food")

console.log("---- User Profile ----")
// console.log("Name: ", userName)
console.log("Favorite food: ", favoriteFood)

// alert("Thanks " + userName + " Enjoy your weekend!")
// Arithmetic Operators
// Basic Operators: +, -, * (Multiplication), / (division)
// Modulus Operator: a%b --> remainder after dividing a by b
// Exponents: a ** b --> a raised to the power of b
// Increment (++) & decrement (--): quick +1 or -1 operations

let lives = 3
lives--
// console.log(lives)

// Concatenation and Template Literals
// Concatenation: medthod for combining strings by adding them 

const userName = "Sam"
const userAge = "17"
const favoriteSubject = "Math"


//Method 1: Concatenation
const message = "Hello, my name is " + userName + " and I am " + userAge + " years old. My favorite subject is " +favoriteSubject
console.log(message)

//Method 2: Template Literals
// ` is button left of 1
const messageTwo = `Hello, my name is ${userName}. I am ${userAge+2} years old. My favorite subject is ${favoriteSubject}`
console.log(messageTwo)

//Multi-Line String \n
const bio = `
=== USER PROFILE ===
Name: ${userName}
Age: ${userAge}
Favorite Subject: ${favoriteSubject}
`
console.log(bio)

console.log(Number(userAge) * .04)




// const amount = Number(prompt("Enter Bill Total:"))
// const tipPercent = Number(prompt("Enter Tip Percentage:"))
// const tipAmount = (tipPercent/100)*(amount)
// const totalCost = (tipAmount + amount)
// const messageUno = 
// `
// Original bill: ${amount}$
// Tip Total: ${tipAmount}$
// total: ${totalCost}$

// `

// console.log(messageUno)





