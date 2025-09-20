const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros) // this will make the pushed array a new value in the array 
// //[ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heros);

// console.log(marvel_heros[0]);
// console.log(marvel_heros[3][1]);  //Flash

// concat(dc_heros) will properly merge the array and concat returns a new array unlike push which works in existing array

//spread
 
const newHeros = [...marvel_heros, ...dc_heros]
console.log(newHeros)

const anotherArray = [1,2,3, [1,2,3], 4, [2,3,3,[1,2,3,4]]];
const realArr = anotherArray.flat(Infinity); // returns the flat array with depth
console.log(realArr);


console.log(Array.isArray("hitesh")); // return boolean
console.log(Array.from("hitesh")); // make array

console.log(Array.from({name : "hitesh"})); // give empty array agar bna nhi payega 


let score1 = 100;
let score2= 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]