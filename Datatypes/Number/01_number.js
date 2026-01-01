var num1 = 10;
var num2 = 30;
var num3 = "30";
var total = num1 + num2; // type inference
console.log(total);
var oct = 1;
var bin = 3;
var hex = 0x11;
console.log(oct + 10); //40
console.log(bin); // 3
console.log(hex); //17
//String to int conversion
var item1 = 100;
var item2 = "50";
var item3 = Number(item2);
console.log(item1 + item3);
console.log(item1 + +item2);
//type Inference
var x = 90;
x = "By";
console.log(x);
// Multiple types
var data = 30;
data = "hello";
console.log(data);
