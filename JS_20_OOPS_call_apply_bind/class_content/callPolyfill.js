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
person1.printNameAndAge.call(person2)

//call Polyfill
Function.prototype.myCall = function(context, ...args){
    if(typeof this !== 'function'){
        throw new Error("Must be executed on a function")
    }
    context.tempFunc = this
    context.tempFunc(...args)

}

person1.printNameAndAge.myCall(person1)