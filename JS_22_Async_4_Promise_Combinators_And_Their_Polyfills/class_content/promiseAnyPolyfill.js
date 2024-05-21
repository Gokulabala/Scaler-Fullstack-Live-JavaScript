Promise.myAny = function(promises){
    return new Promise((res,rej)=>{
        const rejectedArray = []
        let total = 0;

        promises.forEach((promise,index)=>{
            Promise.resolve(promise).then((value)=>{
                res(value)
            }).catch((error)=>{
                rejectedArray[index] = error
                total = total +1

                if(total === promises.length){
                    rej(new AggregateError(rejectedArray,"All promises are rejected"))
                }
            })
        })
    })
}

function fetchUserData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            // res("User data fetched successfully")
            rej("Error")
        },1000)
    })
}

function fetchProfileData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            // res("Profile data fetched successfully")
            rej("OOPS!!! something fishy")
        },2000)
    })
}

function fetchProductData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            // res("Product data fetched successfully")
            rej("error")
        },3000)
    })
}

Promise.myAny([fetchUserData(),fetchProfileData(),fetchProductData()]).then((value)=>console.log(value)).catch((error)=>console.log(error))

Promise.myAny([1,2,3]).then((value)=>console.log(value)).catch((error)=>console.log(error))

