let diff = (a, b) => {
  return a - b;
};

console.log(diff(9, 7));

let sum = (a, b) => {
  return a + b;
};
console.log(sum(1, 2));

// in below example arg is rest parameter
// which is then converted to array

let total = (...arg) => {
  let totalSum = 0;
  for (ele of arg) {
    totalSum += ele;
  }
  return totalSum;
};

console.log(total(3, 4));

// here sum and diff are callback
// function we can pass them as arguments to calculate function

function calculate(a, b, fn) {
  return fn(a, b);
}

console.log(calculate(7, 3, sum));
console.log(calculate(7, 3, diff));

// closures

function outer() {
  let userName = "Salman";

  function inner() {
    console.log(userName);
    return 5;
  }
  return inner;
}

let func = outer();
console.log(func());
