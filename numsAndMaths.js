/// Numbers 

const score = 400;

// typing explicitly
const balance = new Number(40); 

console.log(score); //output : 40
console.log(balance); //output: [Number: 40] specially bola hai ki yeh number hai 

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //give the prescison value till space 2 

const otherNumber = 23.2234;

console.log(otherNumber.toPrecision(2)); //return string type pricise value chaiye values kha tak chaiye 

const hundreds = 1000000000;

console.log(hundreds.toLocaleString("en-IN")); //1,00,00,00,000 , // bydefault use US values like 1,000,000,000

// Maths 
console.log("------------Maths-----------");
console.log(Math);

// most used

console.log(Math.abs(-4)); // absolute value deta hai and minus ko positive krdeta lekin positive negative nhi hota 

console.log(Math.round(5.64));

console.log(Math.ceil(4.2)); //upper value round off 

console.log(Math.floor(4.3)); // lower value round off

// pow(), sqrt(), min() array ke ander lowest value , Math.max() maximum value 

console.log(Math.random()); // humesha 0 or 1 ke beech mein ayegi 
console.log(Math.floor(Math.random()*10 )+1);
 
const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * (max - min + 1 )))+ min) //range bhi hojati hai (max-min) isiliye kiya kyuki range aajye and +1 isilie kiya kyunki 0 na aajye value ;