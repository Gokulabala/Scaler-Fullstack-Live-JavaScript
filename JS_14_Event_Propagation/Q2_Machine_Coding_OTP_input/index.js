//approach 1
// const input = document.querySelector('.inputs')

// input.addEventListener('input',(e)=>{
//     if(isNaN(e.target.value)){
//         e.target.value = ''
//         return
//     }
//     if(e.target.value!=""){
//         if(e.target.nextElementSibling){
//             e.target.nextElementSibling.focus()
//         }
//     }       
// })


// input.addEventListener('keyup',(e)=>{
//     if(e.key === 'Backspace' || e.key === "Delete"){
//         e.target.value = ''
//         if(e.target.previousElementSibling){
//             e.target.previousElementSibling.focus()
//         }
        
//     }
// })

//approach 2
const inputs = document.querySelectorAll(".input")

inputs.forEach((ele) => {
    ele.addEventListener("keyup", (e) => {
        try {
            if(e.key >= 0 && e.key < 10) {
                ele.nextElementSibling.focus()
            } else if (e.key == 'Backspace' || e.key == 'Delete') {
                ele.value = ""
                ele.previousElementSibling.focus()
            } else {
                ele.value = ""
            }
        } catch(err) {
            console.log(err);
        }
       
    })
})