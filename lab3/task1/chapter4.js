"use strict";

// ----- Basic variable declaration -----

let message;
message = "Hello";

alert(message);

// ----- Declaration + assignment in one line -----

let greeting = "Hello, world!";
alert(greeting);

// ----- Multiple variables (recommended: one per line) -----

let userName = "John";
let age = 25;

alert(userName);
alert(age);

// ----- Changing variable value -----

let text = "Hello";
text = "World";
alert(text);

// ----- Copying value from one variable to another -----

let hello = "Hello world!";
let copy;

copy = hello;

alert(hello);
alert(copy);

// ----- Constants -----

const BIRTHDAY = "18.04.1982";
alert(BIRTHDAY);

// ----- Calculated constant (not uppercase) -----

const currentYear = 2026;
const birthYear = 2007;
const userAge = currentYear - birthYear;

alert(userAge);

// ----- Correct variable naming -----

let ourPlanetName = "Earth";
let currentUserName = "Alice";

alert(ourPlanetName);
alert(currentUserName);

// ----- Task solution: admin & name -----

let admin, name;

name = "John";
admin = name;

alert(admin);  // John
