// setTimeout
// Ví dụ
// Đồng bộ
// console.log("Cong viec 1");
// // Bất đồng bộ
// setTimeout(function() {
//     console.log("Cong viec 2");
// }, 2000)

// Ham bat dong bo
function doSomeThing(congviec, time, callback) {
    setTimeout(function() {
        console.log("Đã hoàn thành ",congviec);
        callback()
    }, time)
}

// doSomeThing("Công việc 1", 0)
// doSomeThing("Công việc 2", 2000)
// doSomeThing("Công việc 3", 1000)
// console.log("Hoàn thành công việc 4");

// Callback hell
doSomeThing("Công việc 1", 0, function() {
    doSomeThing("Công việc 2", 2000, function() {
        doSomeThing("Công việc 3", 1000, function() {
            console.log("Hoàn thành công việc 4");
        })
    })
})
// Promise

// Bất đồng bộ
function loadScript(src, callback) {
    const script = document.createElement('script')
    script.src = src
    script.onload = function() {
        callback()
    }
    document.head.append(script)
}

// Bất đồng bộ
loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js", function() {
    // Đồng bộ
    console.log(_.uniq([3,5,6, 8,7, 9,8,9,10, 1]));
})

