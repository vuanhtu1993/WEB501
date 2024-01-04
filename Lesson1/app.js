// Variables
// Có 3 cách khai báo var, let, const (2015 - ecma6)
// 1. Redeclaration
// var 
// var a = 10;
// var a = 20;
// console.log(a);

// Let
// let b = 10;
// let b = 20;

// 2. Scope
// var
// var a = 10

// if(true) {
//     // Block scope
//     var a = 20
// }

// console.log(a);

// Let
let a = 10

if(true) {
    // Block scope
    let a = 20
}

// console.log(a);

// Const
// const c = 10
// c = 20

// Function
// 1. function declaration (hàm khai báo)
// Hoisting
// capitalize()

// function capitalize() {

// }

// 2. function expression (hàm biểu thức)
// capitalize()
// const capitalize = function() {

// }
// console.log(typeof(capitalize));

// 3. Arrow function
// const capitalize = () => {
//     // this
// }