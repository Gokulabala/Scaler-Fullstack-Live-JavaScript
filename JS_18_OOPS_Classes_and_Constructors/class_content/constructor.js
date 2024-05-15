//Constructor function
function Pizza(toppings, size){
    this.toppings = toppings
    this.size = size
    this.describe = function (){
        console.log(`My pizza with toppings as ${this.toppings} and size as ${this.size}`)
    }
}

//Class 
class MyPizza{
    constructor(toppings,size,crust){
        this.toppings = toppings
        this.size = size
        this.crust = crust
    }
    describe(){
        console.log(`My pizza with toppings as ${this.toppings} and size as ${this.size}`)
    }
}

const pizza1 = new Pizza(["veggies","cheese"], "medium")
const pizza2 = new Pizza("chicken","large")
console.log(pizza1)
pizza1.describe()
pizza2.describe()

const order1 = new MyPizza("meat", "small","thin")
console.log(order1)
order1.describe()