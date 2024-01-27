// Xử lý bất đồng bộ
// 1. Callback
function loadScript(src, callback) {
    // Sync
    const script = document.createElement("script")
    // Async
    script.src = src
    script.onload = function () {
        console.log("Load xong roi anh oi");
        callback()
    }
    // Sync
    document.body.appendChild(script)
}

const src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"

// loadScript(src, function () {
//     // Sync
//     const array = [1, 2, 3, [4], [5]]
//     // Sync
//     console.log(_.flatten(array));
// })

// Async task - callback
// function asyncTask(task, time = 100, callback) {
//     setTimeout(function () {
//         console.log(task);
//         callback()
//     }, time)
// }

// ====== Promise =======
// 1. Là một đối tượng, thể hiện kết quả tác vụ bất đồng bộ trong tương lai
// 2. Kết quả trả về có thể là thành công (fullfil), thất bại (reject), chưa hoàn thành (pending)

const asyncTask = function (task, time = 100) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(task)
        }, time)
    })
}

// console.log(asyncTask("task1", 1000));
asyncTask("task1", 1000)
    .then(function (result) {
        console.log(result);
        return asyncTask("task2", 100)
    })
    .then(function (result) {
        console.log(result);
    })


// asyncTask("Task1", 200)
// asyncTask("Task2", 100)
// asyncTask("Task3", 400)

// Sync task
// console.log("Sync task");