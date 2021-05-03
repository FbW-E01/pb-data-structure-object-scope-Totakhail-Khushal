// # Scope

//     ** Instructions **
//     1. Create the following object:
// ```javascript
// const student = { 
//   firstName: "John", 
//   lastName: "Smith", 
//   class: 12,
// };
// ```
const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
};
console.log(student);


// 2. Create a method that prints the following:

// ```javascript
// "John smith is a student in class 12"
// ```

// student.JohnSmithhh = function () {
//     return "John smith is a student of class 12";
// };

function information() {
    console.log("john smith is a stualkjads;fj;asdjf;asjdflsjdfljasfkl");
}

// console.log(student.JohnSmithhh());

// 3. Create a person object.Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".
const person = {
    firstName: "John",
    lastName: "Smith",
    age: 40,
    maritalStatus: "married",
    job: "engineer",
    country: "France",
    placeOfBirth: "Hamburg,Germany"

};
function info() {
    console.log(`${this.firstName}is a ${this.age} year old ${this.job} living in ${this.country}`);
}
person.info = info;
person.info();



// ## Bonus

// 3. Write a method to get the length of the person object.

// const getObjectLength = Object.keys(person).length;
// console.log(getObjectLength);