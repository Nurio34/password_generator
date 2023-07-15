
const btn = document.getElementById("genBtn")
const inp = document.querySelector(".search-cont input")
const copyBtn = document.querySelector(".cont-btn")

const charsStr = "qwertyuıopğasdfghjklşixcvbnmöç.1234567890"
// const charsStr = 
//                 {
//                     chars : "qwertyuıopğasdfghjklşixcvbnmöç.1234567890"
//                 }
// const charsStr = ["q","w","s","y","v","p","g","1","2","4","6","8"]


let password = ""
const passwordLength = 8
let randomNumber = 0



    btn.addEventListener("click",()=>{
        password = ""
        generatePassword()
    })


function generatePassword() {

    for (let i=0; i<passwordLength; i++) {
        randomNumber = +Math.floor(Math.random()*charsStr.length)
        password += charsStr[randomNumber]
    }
    inp.value = password

}

copyBtn.addEventListener("click",copyPassword)

function copyPassword() {
    navigator.clipboard.writeText(inp.value)

    message("Password Coppied", "success")

    inp.value=""
}

function message(message,className) {

    const alertCont = document.querySelector(".alert-cont")
    alertCont.classList.add(className)

    const msgEl = document.querySelector(".message") 
    msgEl.textContent = message

    const passEl = document.querySelector("#passEl")
    passEl.textContent = `"${password}"`

    setTimeout(() => {
        alertCont.classList.remove(className)

    }, 1500);
}