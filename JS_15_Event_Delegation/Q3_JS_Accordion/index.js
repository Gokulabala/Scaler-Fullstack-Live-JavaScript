// Write JS code for accordion here

const accordionBtn = document.querySelectorAll('.accordion-item')
console.log(accordionBtn)
let flag = false

accordionBtn.forEach((accordionItem)=>{
    accordionItem.addEventListener('click',()=>{
        // const idx = e.target
        // console.log(idx)
        
        let content = accordionItem.querySelector('.accordion-content')
        if(!flag){
            flag = !flag
            content.style.display = 'block'
        }
        else{
            flag = !flag
            content.style.display = 'none'
        }
    })
})