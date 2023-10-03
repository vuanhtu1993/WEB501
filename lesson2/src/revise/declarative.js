// Cách 1: Imperative
// const bulb = document.createElement('img')
// bulb.src = "/off.png"
// bulb.style.maxWidth = "80px";
// const switchBtn = document.createElement('button')
// switchBtn.innerText = "Turn on"
// document.body.appendChild(bulb)
// document.body.appendChild(switchBtn)


// // Su kien bat den
// switchBtn.addEventListener('click', function() {
//     if(bulb.src == "http://127.0.0.1:5173/off.png") {
//         bulb.src = "/on.png"
//     } else {
//         bulb.src = "/off.png"
//     }
// })

// Cách 2: Declarative
// State
let bulbState = true
let switchState = true
// Component
function Bulb() {
    return `
        <img style="max-width: 80px" src="${bulbState ? "/on.png" : "/off.png"}"/>
        <button>Switch</button>
    `
}

const render = (container, component) => {
    document.querySelector(container).innerHTML = component()
    document.querySelector("button").addEventListener('click', function() {
        bulbState = !bulbState
        render("body", Bulb)
    })
}

render("body", Bulb)