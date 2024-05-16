const person1  = {
    name : "John",
    age : 29,
    printNameandAge : function (location){
        console.log(`The person name is ${this.name}, age is ${this.age} and residing at ${location}`)
    },
    sum : function (num1, num2, num3, num4, num5){
        console.log(num1+num2+num3+num4+num5)
    }
}

person1.printNameandAge("Bangalore")
person1.sum(1,2,3,4,5)
const person2 = {
    name : "Steve",
    age : 30
}

person1.printNameandAge.call(person2, "Chennai")
person1.sum.call(person2, 1,2,3,4,5)
