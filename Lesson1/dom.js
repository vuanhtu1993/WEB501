// alert("Xin chao cả lớp")

// Khai báo DOM (DOM declaration)
var h1 = document.querySelector('h1')
var button = document.querySelector('button')

// button.addEventListener('click', function () {
//     h1.style.color = "red"
//     h1.style.textAlign = "center"
//     h1.style.textTransform = "capitalize"
// })

button.onclick = function() {
    h1.style.color = "red"
    h1.style.textAlign = "center"
    h1.style.textTransform = "capitalize" 
}

