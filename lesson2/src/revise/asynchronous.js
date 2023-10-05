// setTimeout
// Ví dụ
// Đồng bộ
// console.log("Cong viec 1");
// // Bất đồng bộ
// setTimeout(function() {
//     console.log("Cong viec 2");
// }, 2000)

// Ham bat dong bo
function doSomeThing(congviec, time) {
    setTimeout(function() {
        console.log("Đã hoàn thành ",congviec);
    }, time)
}

doSomeThing("Công việc 1", 0)
doSomeThing("Công việc 2", 2000)
doSomeThing("Công việc 3", 1000)
console.log("Hoàn thành công việc 4");