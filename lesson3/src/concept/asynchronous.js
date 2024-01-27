// Bất đồng bộ
// Các cách xử lý bất đồng bộ

// Sync




// 1. Callback
function loadScript(callback) {
    const script = document.createElement("script")
    // Async
    script.src = "https://lodash.com/vendor/cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"
    script.onload = function () {
        console.log("Load xong roi anh oi");
        callback()
    }
    // Sync
    document.body.appendChild(script)
}

// loadScript(function () {
//     // Sync
//     const arr2 = [1, 2, 3, 4, 5, 4, 3, 2]
//     // Sync
//     console.log(_.uniq(arr2));
// })

//  ======= Callback =======
// const asyncTask = function (task, time = 100, callback) {
//     setTimeout(function () {
//         console.log(task);
//         callback()
//     }, time)
// }

// asyncTask("task 1", 400)
// asyncTask("task 2", 100)
// asyncTask("task 3", 200)
// asyncTask("task 4", 300)
// Xử lý - Handle
// asyncTask("task 1", 400, function () {
//     asyncTask("task 2", 100, function () {
//         asyncTask("task 3", 200, function () {
//             asyncTask("task 4", 300)
//         })
//     })
// })

// ======== Promise =========
const asyncTask = function (task, time = 100) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(task)
        }, time)
    })
}

asyncTask("task 1", 2000)
    .then(result => {
        console.log(result);
        return asyncTask("task 2", 200)
    })
    .then(result => console.log(result))