// Stack Memory, Heap Memory

// Stack(Primitive type)it give a copy, Heap(Non-Primitive)it give reference

let myYoutubeName = "gautamsharma";

let anotherName = myYoutubeName; 
anotherName = "chaiaurcode"
console.log(anotherName);
console.log(myYoutubeName);

// in primitive type jab bhi new values assign hoti and 
// toh uska new copy banta hai in the stack memory
// original value change in hogi

let user = {
    email: "gautamsharma7004@gmail.com",
    upi  : "12342@axisbank"
}

let userTwo = user;

userTwo.email = 'gautam7004@gmail.com';

console.log(user.email);
console.log(userTwo.email);

// in heap original value(reference) milega, copy nhi milega
// mtlb agar baad mein change hoga toh original bhi change hoga

