// data-type
// 7 types
// 1. String
let sv = "trinh ha duc sang"
let sv2 = "vu anh tu"
let tenSV = ""
const result = sv.split(' ')
for (let item of result) {
    // console.log(item[0].toUpperCase() + item.slice(1));
    tenSV += item[0].toUpperCase() + item.slice(1) + " "
}
console.log(tenSV);
// const result = sv[0].toUpperCase() + sv.slice(1)
// console.log(result);