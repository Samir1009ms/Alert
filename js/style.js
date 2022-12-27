
// Alert

const error = document.querySelector(".error")
const info = document.querySelector(".info")
const warning = document.querySelector(".warning")
const success = document.querySelector(".success")

// endSuccess.addEventListener("click",(x)=>{

//     if (x.target.parentNode.classList.contains("success")) {
//         x.target.parentNode.classList.add("hidden")
//     }
// })
window.onclick = x => {
    if (x.target.classList.contains("endError")) {
        x.target.parentNode.classList.add("hidden")
    }
    if (x.target.classList.contains("endInfo")) {
        x.target.parentNode.classList.add("hidden")
    }
    if (x.target.classList.contains("endWarning")) {
        x.target.parentNode.classList.add("hidden")
    }
    if (x.target.classList.contains("endSuccess")) {
        x.target.parentNode.classList.add("hidden")
    }

    if (x.target.classList.contains("alertBtnError")) {
        error.classList.remove("hidden")
    }
    if (x.target.classList.contains("alertBtnInfo")) {
        info.classList.remove("hidden")
    }
    if (x.target.classList.contains("alertBtnWarning")) {
        warning.classList.remove("hidden")
    }
    if (x.target.classList.contains("alertBtnSuccess")) {
        success.classList.remove("hidden")
    }
   
}

// ------------------------------------------------------------

// PoP-Up

const loginBtn = document.querySelector(".loginSign")
const registerBtn = document.querySelector(".loginSignup")
const closeBtn = document.querySelector(".end")
const closeBtnup = document.querySelector(".endup")
const sign = document.querySelector(".Sign")
const signUp=document.querySelector(".Signup")

// const loginOpen=()=>{

// sign.classList.remove("hidden")

// }
// loginBtn.addEventListener("click",loginOpen)

loginBtn.addEventListener("click",()=>{
    sign.classList.remove("hidden")
})
closeBtn.addEventListener("click",()=>{
    sign.classList.add("hidden")
})
sign.addEventListener("click", (x) => {
    if (x.target.className === "Sign") {
        sign.classList.add("hidden")
    }
})

registerBtn.addEventListener("click",()=>{
signUp.classList.remove("hidden")
})
closeBtnup.addEventListener("click",()=>{
    signUp.classList.add("hidden")
})
signUp.addEventListener("click", (x) => {
    if (x.target.className === "Signup") {
        signUp.classList.add("hidden")
    }
})

