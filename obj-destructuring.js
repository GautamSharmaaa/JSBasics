const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor: "hitesh"
}

// object value destructuring 

const {courseInstructor} =course ; 
// value li gyi hai from course object 

console.log(courseInstructor);

const {courseInstructor : instructor} = course;
// value li gyi hai object-course se lekin name krdiya instructor

console.log(instructor);
