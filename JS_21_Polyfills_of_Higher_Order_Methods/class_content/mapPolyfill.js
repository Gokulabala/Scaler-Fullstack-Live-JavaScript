const transactions = [{
        id : "credit001",
        amount : 120,
        type : "credit"
    },{
        id : "debit002",
        amount : 80,
        type : "debit"
    },{
        id : "credit002",
        amount : 100,
        type : "credit"
    }
]

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callback){
        if(typeof callback !== "function"){
            throw new TypeError("Must be used in Function")
        }
        const result = []
        // console.log(this)
        for(let i=0;i<this.length;i++){
            if(i in this){
                const mappedValue = callback(this[i],i,this)
                result[i] = mappedValue
                // result.push(mappedValue)
            }
        }
        return result
    }
}

const transactionIds = transactions.map((currentTransaction) => currentTransaction.id)
console.log(transactionIds)

const transactionIdsMyMap = transactions.myMap(currentTransaction => currentTransaction.id)
console.log(transactionIdsMyMap)

const arr1 = [1,2]
arr1[10] = 100

const arrMyMap = arr1.myMap((ele) => ele + 1)
console.log(arr1, arrMyMap)