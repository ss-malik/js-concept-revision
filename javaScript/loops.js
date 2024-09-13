// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let math = Math.random();
// console.log(math);

// let str = "  Salman Malik  ";
// let newStr = str.trim("a");
// /* trim remove white space from starting and end, returm new string  */
// console.log(newStr);

// let strSplit = str.split(" ");

// console.log(strSplit);

let newStr = "Salman";
console.log(newStr);

let jsonStr = JSON.stringify(newStr);

console.log(jsonStr);
// console.log(".json()", jsonStr.json()); /* only applicable in api responses */

let jsonParse = JSON.parse(jsonStr);
console.log(jsonParse);

let yo = 50;
console.log(yo.toString());
