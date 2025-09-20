// arrays 
const myArr = [0,1,2,3,4,5];
// js arrays are resizable , mixed datatypes
// index cant be in string like one first 
// zero based indexing 
// jab bhi copy karte hai toh shallow copy. banti hai 
// shallow copy of an object is a copy whose properties share the same references as those of the source object
// mtlb jo bhi main change krunga woh orignal array main bhi change hoga
// deep copy - dont share the references 

console.log(myArr[0]);

const myHeros = [ "shaktiman" , "naagraj"];
const myArr2 = new Array(1,2,3,4);

console.log(myArr2.length);

myArr.push(6); // push a value at the last 
myArr.pop(); // pop out the last element
myArr.unshift(0) // push at the first space 
myArr.shift() //remove value from the first place 

console.log( myArr.includes(9)); // return false/true
console.log( myArr.indexOf(9)); // -1 kyunki value hai hi nhi 

const newArr = myArr.join(); // converts array to strings and type will be always string 
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice , splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3) //slice dont manipulate the array 
console.log(myn1)

const myn2 = myArr.splice(1,3); // splice manipulates the array
console.log("B ", myArr)
console.log( myn2)