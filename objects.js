// singleton - jab koi bhi constructor se bnate hai toh single object hi banta hai 
// jab bhi literal se bante hai toh singleton nhi bnega 
// constructor se banate hai toh humesha singleton banta hai 


const mySym = Symbol("key1");

// object literals
const JsUser = {
    name : "gautam",
    add: "greater noida",
    [mySym] : "key1",
    "full name ": "gautam sharma" //can be access via sqaure bracket notation
}

// fetch data from object 
console.log(JsUser.name);
// another method
console.log(JsUser["name"]);

console.log( typeof JsUser["mySym"])

JsUser.name ="the great";

// Object.freeze(JsUser); //will not allow change 
// console.log(JsUser)

JsUser.greetings = function(){
    console.log("hello JS user")
}

JsUser.greetings1 = function(){
    console.log(`hello, good morning ${this.name}`)
}

console.log(JsUser.greetings());
console.log(JsUser.greetings1());

console.log(JsUser);
