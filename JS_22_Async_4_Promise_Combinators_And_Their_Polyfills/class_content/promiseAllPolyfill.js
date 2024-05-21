Promise.myAll = function(promises){
    return new Promise((res,rej)=>{
        const resultArray = []
        let total = 0

        promises.forEach((promise,index)=>{
           Promise.resolve(promise).then((resolvedValue)=>{
                resultArray[index] = resolvedValue
                total = total + 1

                if(total === promises.length){
                    res(resultArray)
                }
            }).catch((error)=>{
                rej(error)
            })
        })
    })
}

function fetchUserData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("User data fetched successfully")
        },1000)
    })
}

function fetchProfileData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Profile data fetched successfully")
            // rej("OOPS!!! something fishy")
        },2000)
    })
}

function fetchProductData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Product data fetched successfully")
        },3000)
    })
}

Promise.myAll([fetchUserData(),fetchProfileData(),fetchProductData()]).then((value)=>console.log(value)).catch((error)=>console.log(error))

Promise.myAll([1,2,3]).then((value)=>console.log(value)).catch((error)=>console.log(error))