const arr = [1,[2,3,[4,5,6,[7,8,[9,10]]]]]

function flattenArray(array){
    return array.reduce((accumulator, currentElem)=>{
        if(Array.isArray(currentElem)){
            const innerFlattenedArray = flattenArray(currentElem)
            accumulator.push(...innerFlattenedArray)
        }else{
            accumulator.push(currentElem)
        }
        return accumulator
    },[])
}

console.log(flattenArray(arr))
console.log(arr)