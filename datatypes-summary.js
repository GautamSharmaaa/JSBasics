// Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt(scientific values)

const score = 100;

const ScoreValue = 100.33;

const isLoggedIn = false; 

const outsideTemp = null ;

let userEmail ; // will be undefined 


//usage of symbol
const id = Symbol('123') ;
const anotherId = Symbol('123');
// dekhne mien lag ki same hai lekin same nhi hai 
console.log(id === anotherId); //false 
// Symbol will make variable unique , return type will be Symbol 

// using BigInt as n
const bigNumber  = 2345678987653456789n

// Reference type(Non Primitive)
// Array, Objects, Functions

const heros = ['shaktiman', 'naagraj', 'doga']

let myObj = {
    name: "gautam",
    age: 23,
}

// function can also be treated as variable in js 
function myFunction(){
    console.log("hello world")
}

// datatype pta kaise kre 

console.log(typeof bigNumber); //bigint
console.log(typeof outsideTemp) // object but why object ??
// non primitive function will be always objectfunction but in terminal it will always called function