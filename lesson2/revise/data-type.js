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
// console.log(tenSV);
// const result = sv[0].toUpperCase() + sv.slice(1)
// console.log(result);

const reverseString = (someString) => {
    const length = someString.length
    let result = ""
    for (let i = length - 1; i >= 0; i--) {
        result += someString[i]
    }
    return result
}
// reverseString("I am a string")
// console.log(reverseString("I am a string")) // gnirts a ma I


// Number data-type
// Bài 1: Cho chuỗi số [4,6,1,5,-6,2,8,1,9,3]
// Tìm số lớn nhất và số nhỏ nhất
// Tìm số lớn thứ 2 (chỉ dùng 1 vòng lặp)


// Array data-type
// Bài 1: 
let classRoom = [
    "nguyễn tiến duẩn",
    "Hoàng Xuân Hiếu",
    "Hồ Sỹ Hưng",
    "Nguyễn Đức Thuận",
    "đoàn Minh Tùng",
    "Hồ Sỹ Hùng",
    "Lê Trung Hiếu",
    "đoàn vua dep trai vua hoc gioi Hữu Quý"]
// Câu 1: Tach ten va ho rieng
// Câu 2: Thêm một sv vào một vị trí bất kỳ trong mảng
// Câu 3: Xoá một sinh viên khỏi mảng
// Câu 4: Tìm kiếm theo tên, không chứa dấu

// Buổi 5: Object
// Cách để tạo ra object
// 1. Object literal
const sinhvien = {
    name: "nguyễn tiến duẩn",
    goToSchool: function () {
        console.log("I'm going to school");
    }
}

// console.log(sinhvien.name);
// sinhvien.goToSchool()
// 2. Từ khoá new
const sinhvien2 = new Object({
    name: "nguyễn tiến duẩn",
    class: "WD18201",
    goToSchool: function () {
        console.log("I'm going to school");
    },
    showInfo: () => {
        console.log(this);
        // This - đại diện cho đối tượng
        // This - chỉ tồn tại trong method
        console.log(this.name + "-" + this.class);
    }
})