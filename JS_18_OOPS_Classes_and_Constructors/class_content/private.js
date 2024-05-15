class Mypizza{
    #result
    static count =0
    constructor(toppings,size){
        this.toppings = toppings
        this.size = size
        Mypizza.count = Mypizza.count + 1
        this.#result = "100"
    }
    describe(){
        console.log(`Toppings ${this.toppings} and size ${this.size} secret ${this.#result.length}`)
    }
}

const obj = new Mypizza('veg','medium')
console.log(obj)
obj.describe()
const obj2 = new Mypizza('chic','large')
console.log(Mypizza.count)