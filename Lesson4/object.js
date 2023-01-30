// Object literal
value = "Vu Anh Tu"
var myString = {
    value: "polytechnic",
    length: 11,
    toUpperCase: function () {
        return this.value.toUpperCase() + " " + this.length
    }
}

// Object Contructor Function
var MyString = function () {
    this.value = "polytechnic";
    this.length = 11;
    this.toUpperCase = function () {
        return this.value.toUpperCase()
    }
}

// Tao doi tuong Sinhvien theo 2 cach
// 1. Sinh vien co cac thuoc tinh Ten - Tuoi - Dia chi
// 2. Sinh vien co phuong thuc in ra thong tin ca nhan
// DEMO: in ra Nguyen Thi Khang - 18 - Bac Giang

var sinhvien = {
    name: "Nguyen Thi Khang",
    age: 18,
    address: "Bac Giang",
    showInfo: function() {
        return this.name + "-" + this.age + "-" + this.address
    }
}