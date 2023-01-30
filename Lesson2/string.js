// DOM declaration
var h1 = document.querySelector('h1')
var text = h1.innerHTML

text = text.toLowerCase()
text = text.replaceAll("mèo", "chó")
var firstLetter = text[0].toUpperCase()
console.log(firstLetter.concat(text.slice(1)));


// Function
function ham1(str) {
    // console.log(str);
    return str
}

// console.log(ham1("xin chao ca lop"));
// // Anomymous function (ham an danh)
// var ham2 = function() {
//     console.log("ham2");
// }

function max(arr) {
    var max1, max2
    max1 = max2 = arr[0]
    for(var i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if(max1 < arr[i]) {
            max2 = max1;
            max1 = arr[i]
        } else if(arr[i] > max2 || max1 == max2){
            max2 = arr[i]
        }
    }
    console.log(max1, max2);
}

max([9,3,4,5,2])








