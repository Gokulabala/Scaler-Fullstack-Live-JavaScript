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

const args = [1,2,3,4,50]
person1.printNameandAge.call(person2, "chennai")
person1.sum.apply(person2,args)
person1.sum(...args)

const nums = [10,20,70,40,50,60]

console.log(Math.max.apply(null, nums))

//spread operator
// converting array elements to arguments
//used in function call

console.log(Math.max(...args))

//rest operator
//converting arguments into array
//used in function definiton

function max(...args){
    console.log(args)
}

max(2,3,5,7)
