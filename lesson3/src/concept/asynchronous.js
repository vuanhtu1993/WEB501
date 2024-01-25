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

loadScript(function () {
    // Sync
    const arr2 = [1, 2, 3, 4, 5, 4, 3, 2]
    // Sync
    console.log(_.uniq(arr2));
})