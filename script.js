let inputSlider= document.getElementById("inputSlider")
let sliderValue= document.getElementById("sliderValue")

sliderValue.textContent= inputSlider.value

inputSlider.addEventListener("input",()=>{
    sliderValue.textContent= inputSlider.value
})

let lowercase= document.getElementById("lowercase")
let uppercase= document.getElementById("uppercase")
let numbers= document.getElementById("numbers")
let symbols= document.getElementById("symbols")
let passBox= document.getElementById("passBox")
let copyIcon= document.getElementById("copyIcon")
let genBtn= document.getElementById("genBtn")

genBtn.addEventListener("click",()=>{
    passBox.value= generatePassword()
})

let upperC="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerC="abcdefghijklmnopqrstuvwxyz"
let allNumbers="0123456789"
let allSymbols="~!@#$%^&*"


function generatePassword(){
    genPassword=""
    allChar=""

    allChar+= uppercase.checked ? upperC : ""
    allChar+= lowercase.checked ? lowerC : ""
    allChar+= numbers.checked ? allNumbers : ""
    allChar+= symbols.checked ? allSymbols : ""

    for(let i=1 ;i<=inputSlider.value ;i++ ){
        genPassword+= allChar.charAt(Math.floor(Math.random()*allChar.length))
    }

    copyIcon.addEventListener("click",()=>{
        
        navigator.clipboard.writeText(passBox.value)
        copyIcon.textContent="check"
        copyIcon.title="copied"
    })

    setInterval(()=>{
        copyIcon.textContent="content_copy"
        copyIcon.title=""
    },3000)

    return genPassword
}