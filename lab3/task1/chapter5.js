"use strict";

// ----- Number -----

let n = 123;
n = 12.345;

alert(n);

alert(1 / 0);        // Infinity
alert("text" / 2);  // NaN

// ----- BigInt -----

const bigInt = 1234567890123456789012345678901234567890n;
alert(bigInt);

// ----- String -----

let name = "Ilya";

alert(`hello ${1}`);        // hello 1
alert(`hello ${"name"}`);  // hello name
alert(`hello ${name}`);    // hello Ilya

// ----- Boolean -----

let isGreater = 4 > 1;
alert(isGreater);  // true

// ----- null -----

let age = null;
alert(age);        // null

// ----- undefined -----

let value;
alert(value);      // undefined

// ----- typeof operator -----

alert(typeof undefined);     // "undefined"
alert(typeof 0);             // "number"
alert(typeof 10n);           // "bigint"
alert(typeof true);          // "boolean"
alert(typeof "hello");       // "string"
alert(typeof Symbol("id"));  // "symbol"
alert(typeof Math);          // "object"
alert(typeof null);          // "object" (language bug)
alert(typeof alert);         // "function"
