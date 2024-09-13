// implicit -  sum of a string and number result is string
// here in no. is concatinated to string
let a = 2;
let b = "2";
let c = a + b;
console.log(c, typeof c);

// by using Number() we can convert string to number
//  explicit conversion
let d = Number(b);
console.log(d, typeof d);

console.log(7 + null);
console.log(7 + "null");
console.log(7 + true);
console.log(7 + false);

console.log(7 + undefined);
