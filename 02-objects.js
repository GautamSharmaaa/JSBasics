// singleton 
// constructor
const tinderUser = {};
// or
const tinderUser1 = new Object(); //singleton object hai kyunki constructor ke through bna hai 
//object can be nested and can be access via . notation

const user = {
    name: "gautam ",
    username: {
        fullname: {
            firstName: "gautam",
            lastName: "sharma"
        }
    }
}

console.log(user.username.fullname.firstName);
console.log(user.username.fullname.lastName);

//optional chaining
console.log(user.username.fullname?.firstName);
//provide safety agar hai to return nhi hai toh koi na


// combining obj

const obj = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};


const obj3 = Object.assign({}, obj, obj2); // aise {} de skte hai kyunki is ensure krta hai ki object hi aye hau safety provide krta hai
// {} == target and other like obj1 , obj2 , obj3 are source, aur nhi krenge to saari value obj1 mien jyegi
console.log(obj3)
// also we can merge the via spread like in arrays like const obj3 = {...obj1, ...obj2}

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
// these all above 3 return array by which can iterate easily 

console.log(tinderUser.hasOwnProperty("isloggedin"));
// gives boolean