
// Alert

const error = document.querySelector(".error")
const info = document.querySelector(".info")
const warning = document.querySelector(".warning")
const success = document.querySelector(".success")
const alert = document.querySelector(".alert")

// endSuccess.addEventListener("click",(x)=>{

//     if (x.target.parentNode.classList.contains("success")) {
//         x.target.parentNode.classList.add("hidden")
//     }
// })

function alertbtn(x) {
x.classList.add("hidden")
}

setTimeout(()=>alertbtn(error),3000)
setTimeout(()=>alertbtn(info),4000)
setTimeout(()=>alertbtn(warning),5000)
setTimeout(()=>alertbtn(success),6000)

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
        setTimeout(()=>alertbtn(error),3000)
    }
    if (x.target.classList.contains("alertBtnInfo")) {
        info.classList.remove("hidden")
        setTimeout(()=>alertbtn(info),3000)
    }
    if (x.target.classList.contains("alertBtnWarning")) {
        warning.classList.remove("hidden")
        setTimeout(()=>alertbtn(warning),3000)
    }
    if (x.target.classList.contains("alertBtnSuccess")) {
        success.classList.remove("hidden")
        setTimeout(()=>alertbtn(success),3000)
    }

}

// ------------------------------------------------------------

// PoP-Up

const loginBtn = document.querySelector(".loginSign")
const registerBtn = document.querySelector(".loginSignup")
const closeBtn = document.querySelector(".end")
const closeBtnup = document.querySelector(".endup")
const sign = document.querySelector(".Sign")
const signUp = document.querySelector(".Signup")

// const loginOpen=()=>{

// sign.classList.remove("hidden")

// }
// loginBtn.addEventListener("click",loginOpen)

loginBtn.addEventListener("click", () => {
    sign.classList.remove("hidden")
})
closeBtn.addEventListener("click", () => {
    sign.classList.add("hidden")
})
sign.addEventListener("click", (x) => {
    if (x.target.className === "Sign") {
        sign.classList.add("hidden")
    }
})

registerBtn.addEventListener("click", () => {
    signUp.classList.remove("hidden")
})
closeBtnup.addEventListener("click", () => {
    signUp.classList.add("hidden")
})
signUp.addEventListener("click", (x) => {
    if (x.target.className === "Signup") {
        signUp.classList.add("hidden")
    }
})
const qayda = document.querySelector(".qaydalink")
const sertler = document.querySelector(".sert")
const qaydaend = document.querySelector(".qaydaend")
const qaydaBtn = document.querySelector(".qaydaBtn")
qayda.addEventListener("click", () => {
    sertler.classList.remove("hidden")
})

qaydaend.addEventListener("click", () => {

    sertler.classList.add("hidden")
})

qaydaBtn.addEventListener("click", () => {
    sertler.classList.remove("hidden")
})

const form = document.querySelector(".registerform")

const sifr = /^[a-zA-Z0-9]{8,12}$/

form.sifree.addEventListener("keyup", (x) => {
    if (sifr.test(x.target.value)) {
        x.target.setAttribute("style", "color:green")

    }
    else {
        x.target.setAttribute("style", "color:red")
    }

})

form.sifre2.addEventListener("keyup", (x) => {
    if (sifr.test(x.target.value)) {
        x.target.setAttribute("style", "color:green")

    }
    else {
        x.target.setAttribute("style", "color:red")
    }

})



const formlogin = document.querySelector(".loginParol")
const sifrr = /^[a-zA-Z0-9]{8,12}$/

formlogin.parol.addEventListener("keyup", (z) => {
    if (sifrr.test(z.target.value)) {
        z.target.setAttribute("style", "color:green")
    }
    else {
        z.target.setAttribute("style", "color:red")
    }

})



