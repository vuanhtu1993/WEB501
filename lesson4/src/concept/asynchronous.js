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

loadScript(src, function () {
    // Sync
    const array = [1, 2, 3, [4], [5]]
    // Sync
    console.log(_.flatten(array));
})