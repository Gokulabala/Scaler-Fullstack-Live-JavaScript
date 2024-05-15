// Constructor function for Person
function Person(name) {
    this.name = name;
}
  
// Prototype for Person
Person.prototype.introduce=function(){
    return `Hi, I'm ${this.name}.`
}


// Person.prototype.__proto__.random = function(){
//     return `AM I implemented`
// }

// Object.prototype.secretValue = 100

// Person.prototype.__proto__.value = 1000
// const newPerson = new Person("John")
// console.log(newPerson)
// console.log(newPerson.introduce())
// console.log(newPerson.random())
// console.log(newPerson.secretValue)
// console.log(newPerson.value)
// console.log(newPerson.hasOwnProperty('value'))

