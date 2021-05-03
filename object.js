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

student.JohnSmithhh = function () {
    return "John smith is a student of class 12";
};

console.log(student.JohnSmithhh());


console.log("===========================================");


// 3. Create a person object.Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".
const person = {
    firstName: "John",
    lastName: "Smith",
    age: 40,
    maritalStatus: "married",
    job: "engineer",
    country: "France",
    placeOfBirth: "Hamburg,Germany",



    // this is the firs method.
    // print: function () {
    //     console.log(`${this.firstName} is  ${this.age} year old ${this.job} living in ${this.country}`);
    // }

};
// person.print()


//This is the second method======

function information() {
    console.log(`${this.firstName} is  ${this.age} year old ${this.job} living in ${this.country}`);
}
person.info = information;
person.info();



//method three ========================================
// console.log(`${person.firstName} ${person.lastName} is a ${person.age} years old ${person.job} living in ${person.country} in ${person.placeOfBirth}`)






console.log("===========================================");
// ## Bonus

// 3. Write a method to get the length of the person object.

const getObjectLength = Object.keys(person).length;
console.log(getObjectLength);
//=============================================================
console.log("===========================================");
