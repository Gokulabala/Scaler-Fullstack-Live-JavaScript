const transactions = [{
    id : "credit01",
    amount : "180",
    type : "credit"
},
{
    id : "debit01",
    amount : "50",
    type : "debit"
},
{
    id : "credit02",
    amount : "100",
    type : "credit"
}]

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function (callback){
        if(typeof callback !== "function"){
            throw new typeError("Must be used in function")
        }

        const result = []

        for(let i=0;i<this.length;i++){
            if(i in this){
                const condition = callback(this[i],i,this)
                if(condition){
                    result.push(this[i])
                }
            }
            
        }
        return result

    }
}

const filtertype = transactions.filter((currentTransaction) => currentTransaction.type=== "credit")

const filtertypeMyfilter = transactions.myFilter((currentTransaction) => currentTransaction.type=== "credit")
console.log(filtertype, filtertypeMyfilter)