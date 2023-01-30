var we17317 = ['Trần Long Thành' ,'Dương Đức Long', 'Trần Tuấn Anh', 'Trần Văn Thành']

//// Duyệt mảng
// Loop
for(var i = 0; i < we17317.length; i++) {
    console.log(we17317[i]);
}

for(item of we17317) {
    console.log(item);
}

//// Anonymous function
we17317.forEach(function(item) {
    console.log(item);
})

//// Tìm kiếm / Lọc
// Viết hàm tìm kiếm tên sinh viên trong lớp
arr = [1,5,7,2,9]
var result = arr.find(function(item) {
    // logic tim kiem
    return item > 5
})

// console.log(result);

function searchByName(name) {
    return we17317.filter(function(item) {
        // Logic tim kiem
        return item.includes(name)
    })
}

// function filterByName() {

// }

// console.log(searchByName("Vũ Anh Tú"));


//// Biến đổi
// Tạo hàm lấy ra tên các sinh viên trong lớp trong trùng lặp nhau
var result = we17317.map(function(item) {
    // Logic biến đổi
    return item.split(" ").pop()
})

function unique(arr) {
    return arr.filter(function(item, index) {
        // Logic lọc
        return arr.indexOf(item) == index
    })
}

console.log(unique(result));