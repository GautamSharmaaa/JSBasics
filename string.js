//Strings
//concatination
const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount);
// outdated way

// new way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// declaration
const gameName = String("gautam");

//methods
console.log(gameName[0]);
console.log(gameName.__proto__); // ek tareeka hai likhne ka bas 

console.log(gameName.toLowerCase());
// original string ko change nhi kiya hai 

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));

//substring 
const newString = gameName.substring(0, 4);
//0, 1, 2, 3 last wali value nhi ayegi

console.log(newString);

//slicing
const anotherString = gameName.slice(0, 4);
console.log(anotherString);

 // agar -index hoga to peeche se chalega 
const anotherString1 = gameName.slice(-6, 4);
console.log(anotherString1);
console.log("hello world")


const name1  = "   gautam.   ";
console.log(name1);
console.log(name1.trim()); //whitespace and /n nextline wala

const url = "https://hitesh.com/hitesh%20chaudary";

console.log(url.replace('%20','-')); // replace

console.log(url.includes("hitesh")); //boolean

//split method

console.log(url.split("/", 1));
console.log(url.split(/\/|%/)); // regular expression

