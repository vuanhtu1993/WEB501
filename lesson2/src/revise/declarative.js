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

// Component
const BulbComponent = function() {
    return `
        <img src="/off.png">
        <button>Turn on</button>
    `
}

const render = function(component) {
    document.body.innerHTML = component()
}

render(BulbComponent)