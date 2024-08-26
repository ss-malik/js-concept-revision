const button = document.querySelector(".another");
const paraText = document.querySelector(".apiText");

const fetchApiData = async () => {
  const jokeData = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await jokeData.json();
  console.log(data.value);
  paraText.innerHTML = data.value;
};

button.addEventListener("click", fetchApiData);

// 1. There is a string
// str = The blue dog jumps over a white lazy dog.
// i. Reverse the string.
// ii. Reverse the order of words in the string
// output : dog lazy white a over jumps dog blue The
// iii. Reverse the characters in each words in a string without changing the order
// of the words
// output: ehT eulb god spmuj revo a etihw yzal god.

let str = "my name is Salman";

function orderOfWord() {
  let newStr = str;
  newStr.split(" ").reverse().join(" ");
  return newStr;
}

console.log(orderOfWord());

const radii = [1, 2, 3, 4, 5];

function dia() {
  return radii.map((r) => 2 * r);
}
function cir() {
  return radii.map((r) => 2 * Math.PI * r);
}
function area() {
  return radii.map((r) => Math.PI * r * r);
}
// console.log(dia(), cir(), area());

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const evenArr = arr.filter((a) => a % 2 == 0);
const oddArr = arr.filter((a) => a % 2 != 0);

const sumEven = evenArr.reduce((num, acc) => {
  return num + acc;
}, 0);
const sumOdd = oddArr.reduce((num, acc) => {
  return num + acc;
}, 0);
console.log(sumEven, sumOdd);
