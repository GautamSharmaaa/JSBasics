// Dates

let myDate = new Date();
// date ek object hai 
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// 2025-09-20T08:23:07.528Z
// Sat Sep 20 2025 13:53:07 GMT+0530 (India Standard Time)
// 2025-09-20T08:23:07.528Z
// 9/20/2025
// 2025-09-20T08:23:07.528Z
// 9/20/2025, 1:53:07 PM
// 1:53:07 PM

let myCreateDate = new Date(2023, 0, 23); //js mien months 0 se start hote hai 
console.log(myCreateDate.toString());
let myCreateDate1 = new Date("2023-01-23");
console.log(myCreateDate1.toString());

// timestamps
let myTimeStamp = Date.now() ;
console.log(myTimeStamp); //comes in miliseconds and used in time and date in booking apps etcs;

console.log(myCreateDate1.getTime());


console.log(Math.floor(Date.now()/1000));
// getMonth()+1 kyunki month 0 se start hota hai, getDay();

// `${newdate.getMonth()} and the time is 
// known as string interpolation

