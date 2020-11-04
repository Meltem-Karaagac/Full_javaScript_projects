// LENGTH
const myString_1 = "Merhaba!";
const myString_2 = "";

// console.log("(length) myString_1: " + myString_1.length);
// console.log("(length) myString_2: " + myString_2.length);


// CONCAT
const myString_3 = "Clarus";
const myString_4 = "Way";

const complete = myString_3.concat(myString_4);
// console.log(complete)
// console.log(complete.length)

const word = "Welcome to ";
// console.log(word.concat(myString_3, myString_4))

// CHAR-AT
const myString_5 = "ClarusWay";
// console.log(myString_5.charAt(5));
// console.log(myString_5[5]);

// INCLUDES
const myString_6 = "Hello friends, Welcome to Clarusway!";
// console.log(myString_6.includes("friends"));
// console.log(myString_6.includes("welcome"));

// INDEX-OF
const myString_7 = "Boyle yasamaktan biktim ben usta!";
// console.log(myString_7.indexOf("biktim"));
// console.log(myString_7.indexOf("e"));
// console.log(myString_7.indexOf("hayat"));

const myString_8 = "Merhaba güzel dünya!";
// console.log(myString_8.indexOf("M"));

// REPLACE
const myString_9 = "Hello friends, Welcome to Clarusway";
// console.log(myString_9);

const newString = myString_9.replace("Hello", "Hi");
// console.log(newString);
// console.log(best);

// SEARCH (Regular Expressions: regex)
const myString_10 = "Hello friends, Welcome to Clarusway";
// console.log(myString_10.indexOf("Welcome"));
// console.log(myString_10.search(/welcome/i));

// SLICE
const myString_11 = "Welcome to the world!";
const mySlice = myString_11.slice(6, 13);
// console.log(mySlice);
// console.log(myString_11);

// SPLIT
const myString_12 = "Hello friends! Welcome to! Clarusway!";
// console.log(myString_12.split("!"));

// SUBSTR - SUBSTRING
const myString_13 = "Hello friends, Welcome to Clarusway!";
// console.log(myString_13.substr(6, 10));    // 6'dan başla, 10 karakter al
// console.log(myString_13.substring(6, 10)); // 6 ile 10 arasındakileri al

// SUBSTRING / SUBSTR / SLICE ??

// TOLOWERCASE - TOUPPERCASE
const myString_14 = "SELAM dunyali, BEN doStum!";
// console.log(myString_14.toLowerCase());
// console.log(myString_14.toUpperCase());

// TRIM
const myString_15 = "       Selamlar, ben uzayli     ";
const newString_2 = myString_15.trim();
// console.log(myString_15.length);
// console.log(newString_2.length);
