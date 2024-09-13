// let arr = [1, 2, 3, 4];

// arr.push(5, 6);
// let del = arr.pop();
// console.log(del);
// let newArr = arr.concat(7, 8);
// // console.log(newArr.indexOf(8));
// console.log(newArr);
// let join = newArr.join("");
// let join1 = newArr.join("@");

// console.log(typeof join);
// console.log(join1);

// // function baby() {
// //   return "something";
// // }

// // console.log(baby.name);
// arr.reverse();

// arr.shift();
// arr.unshift(3, 4);

// let sliceArr = arr.slice(1, 3);
// console.log(arr);
// console.log(sliceArr);

// let spliceArr = arr.splice(1, 3);

// console.log(arr);
// console.log(spliceArr);

// let fruits = ["banana", "watermelon", "apple", "grapes", "lemon"];

// for (let item of fruits) {
//   console.log(item);
// }

// for (const key in fruits) {
//   console.log(key);
// }

// let obj = {
//   username: "salman",
//   rollno: 41,
//   branch: "mech",
// };

// destructuring in object
// order is not important in destructring

// let { branch } = obj;
// console.log(branch);

// for (const key in obj) {
//   console.log(key);
// }

// rest parameters

function sum(a, b, c) {
  let total = a + b + c;
  return total;
}

console.log(sum(1, 2, 3));

// above code with rest operator example

function sumT(...num) {
  //here num is example of num
  let sum = 0;
  for (let no of num) {
    sum += no;
  }
  return sum;
}

console.log(sumT(1, 2, 3, 4));
console.log(sumT(1, 2, 3, 4, 5));

let obj = {
  username: "salman",
  rollno: 41,
  branch: "mech",
};

let { username, ...remaining } = obj;
console.log(username, remaining);

let veg = [1, 2, 3, 4, 5];

let [x, y, ...coll] = veg;
console.log(x, y, coll);
// rest parameter used in array return array
// rest parameter used in object return object
