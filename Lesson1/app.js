// Variables
// ---- Redeclaration ----
// Var
// var a = 10;
// var a = 20;

// console.log(a);
// Let
// let b = 10
// let b = 20

// console.log(b);
// ---- Block scope
// Var
// var a = 10
// if(true) {
//     // Block
//     var a = 20
// }

// console.log(a);

// Let
// let a = 10
// if(true) {
//     // Block
//     let a = 20
//     console.log(a, "in block");
// }
// let a = 10
// {
//     let a = 20
//     console.log(a, "block 1");
//     {
//         // let a = 30
//         console.log(a, "block 2");
//     }
// }

// console.log(a, "block 0");

// OOP - Object Oriented Programming
// Có 2 cách tạo đối tượng
// Object literature
// let room = {
//     width: 4.5,
//     length: 6,
//     height: 3.5,
//     location: "F",
//     floor: 4,
//     code: 406,
//     open: function() {
//         console.log("Opening....");
//     },
//     close: function() {
//         console.log("Close....");
//     }
// }

// String
// String method
// Task1:
let sv = " nguyen quang huy"
// Nguyen Quang Huy
let newStr = "";
for(let i = 1; i < sv.length; i++) {
    if (sv[i - 1] == " ") {
        newStr += sv[i].toUpperCase()
        continue;
    }
    newStr += sv[i];
}

console.log(newStr);