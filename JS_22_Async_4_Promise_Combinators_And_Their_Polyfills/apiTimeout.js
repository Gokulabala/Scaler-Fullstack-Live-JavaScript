function fetchUserData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("User data fetched successfully")
        },7000)
    })
}

function maxTimeout(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej("Timeout")
        },6000)
    })
}

Promise.race([fetchUserData(),maxTimeout()]).then((value)=>console.log(value)).catch((error)=>console.log(error))