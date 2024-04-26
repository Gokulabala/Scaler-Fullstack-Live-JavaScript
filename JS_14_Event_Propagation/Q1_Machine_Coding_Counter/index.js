const number = document.querySelector('#number');
const incrementOrDecrement = document.querySelector('#increment')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#subtract')
const resetBtn = document.querySelector('#reset')

let count = 0;
let value = 1;
addBtn.addEventListener('click',()=>{
    
    count = count + value;
    number.innerText = count
})

subBtn.addEventListener('click',()=>{
    if(count>0 && count-value>0){
        count = count - value;
        number.innerText = count
    }
    
})

resetBtn.addEventListener('click',()=>{
    count = 0;
    number.innerText = count
})

incrementOrDecrement.addEventListener('change',()=>{
    value = parseInt(incrementOrDecrement.value)
    console.log(value)
})