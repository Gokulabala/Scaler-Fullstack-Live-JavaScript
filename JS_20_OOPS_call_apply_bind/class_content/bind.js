const person1 = {
    name : "Mark",
    age : 19,
    printNameAndAge : function(location){
        console.log(`The name is ${this.name}, age is ${this.age} and residing at ${location}`)
    }
}

 const personNameAgeBatman = person1.printNameAndAge.bind(person1)
 personNameAgeBatman("chennai")

const person2 = {
    name : "Whale",
    age : 41
}


 const newBatWoman = person1.printNameAndAge.bind(person2)
 newBatWoman("Bangalore")