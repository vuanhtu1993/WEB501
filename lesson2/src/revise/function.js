// Các cách khai báo hàm

// Callback
const arr = [1, 2, 3, 5, 6, 7]
// [1,4,9,25,36,49]
const new_arr = arr.map(function (item) {
    return item * item
})

// console.log(new_arr);
const wd18201_map = function (arr, callback) {
    let new_arr = []
    for (let i = 0; i < arr.length; i++) {
        const new_item = callback(arr[i])
        new_arr.push(new_item)
    }
    return new_arr
}

const result = wd18201_map(arr, function (item) {
    // Logic
    return item * item + 1
})

console.log(result);