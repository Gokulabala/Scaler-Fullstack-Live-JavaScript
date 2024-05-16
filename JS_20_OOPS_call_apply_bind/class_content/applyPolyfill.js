
const person1 = {
    name : "Roger",
    age : 18,
    printNameAndAge : function(){
        console.log(`the name is ${this.name} and age is ${this.age}`)
    }
}
const person2 ={
    name : "Wills",
    age : 26
}

Function.prototype.myApply = function (context, argsArray){
    if(typeof this !== 'function'){
        throw new Error("Must be executed on Function")
    }

    context.tempFunc = this
    context.tempFunc(...(argsArray || []))
}

person1.printNameAndAge.myApply(person2)