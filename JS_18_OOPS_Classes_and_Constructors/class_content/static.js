//static

class Mypizza{
    static count = 0
    static randomMethod(){
        console.log(`this is a random method `)
    }
    constructor(toppings,size){
        this.toppings = toppings
        this.size = size
        Mypizza.count++
    }
    describe(){
        console.log(`toppings ${this.toppings} and size ${this.size} count ${this.count}`)
    }
}

const obj = new Mypizza("veg","size")
console.log(obj)
obj.describe()
console.log(obj.count)
console.log(Mypizza.count)
Mypizza.randomMethod()