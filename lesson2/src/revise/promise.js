function doSomeThing(congviec, time, callback) {
    setTimeout(function() {
        console.log("Đã hoàn thành ",congviec);
        callback()
    }, time)
}
// Promise - object
// const promiseDoSomeThing = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Đã hoàn thành ",congviec);
//     }, time)
// })

const promiseDoSomeThing = function (congviec, time) {
    let status = Math.random() < 0.5
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // console.log("Đã hoàn thành ",congviec);
            if (status) {
                resolve(`Đã hoàn thành ${congviec}`)
            } else {
                reject("Loi roi anh mie")
            }
        }, time)
    }) 
}

promiseDoSomeThing("Cong viec 1", 1000)
.then(function(data) {
    console.log(data);
    return promiseDoSomeThing("Cong viec 2", 2000)
})
.then(function(data) {
    console.log(data);
    return promiseDoSomeThing("Cong viec 3", 500)
})
.then(function(data) {
    console.log(data);
    return promiseDoSomeThing("Cong viec 4", 0)
})
.then(function(data) {
    console.log(data);
    return promiseDoSomeThing("Cong viec 5", 100)
})
.catch(function(err) {
    console.log(err);
})