const arr = [1,2,3,4,5]

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(callback,initialValue){
        if(typeof callback!== "function"){
            throw new TypeError("Must be used in function")
        }

        if(!initialValue && this.length<1){
            throw new TypeError("If Initial value is none and array has no elements")
        }

        let accumulator = initialValue ? initialValue : this[0]
        let startIndex = initialValue ? 0 : 1

        for(let i = startIndex;i<this.length;i++){
            accumulator = callback(accumulator,this[i], i, this)
        }

        return accumulator
    }
}

const arrReduce = arr.reduce((acc,ele) => acc + ele, 0)

const arrMyReduce  = arr.myReduce((acc,ele) => acc + ele, 0)
console.log(arrReduce, arrMyReduce)
