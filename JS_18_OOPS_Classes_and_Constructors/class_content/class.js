// class
class Myclass{
    constructor(prop1,prop2){
        this.prop1 = prop1
        this.prop2 = prop2
    }
    mymethod(){
        console.log(this.prop1)
    }
}

const obj = new Myclass(10,20)
console.log(obj)
obj.mymethod()



