// inheritance

class Mypizza{
    constructor(toppings,size){
        this.toppings = toppings
        this.size = size
    }
    describe(){
        console.log(`toppings with ${this.toppings} and size as ${this.size}`)
    }
}

const order1 = new Mypizza("veg", "medium")
console.log(order1)
order1.describe()

class Mypizza2 extends Mypizza{
    constructor(toppings,size,crust){
        super(toppings,size)
        this.crust = crust
    }
    describe(){
        console.log(`toppings with ${this.toppings}, size as ${this.size} and crust as ${this.crust}`)
    }
}

const obj2 = new Mypizza2("chick","large","thin")
console.log(obj2)
obj2.describe()