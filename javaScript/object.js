// lets revise Map, filter and reduce First

let personArr = [
  { userName: "Sachin", branch: "cse", course: "Btech" },
  { userName: "Vikas", branch: "mech", course: "Btech" },
  { userName: "Nikhil", branch: "civil", course: "Btech" },
  { userName: "Mohit", branch: "cse", course: "Btech" },
  { userName: "Salman", branch: "civil", course: "Btech" },
];

let filteredObj = personArr.filter((obj) => obj.branch === "civil");

console.log(filteredObj);

let priceArr = [32, 55, 18, 99, 70];

let sum = 0;
for (let ele of priceArr) {
  sum += ele;
}
console.log(sum);

let total = priceArr.reduce((acc, curr) => (acc += curr));
let total1 = priceArr.reduce((acc, curr) => (acc += curr), 6);

console.log(total, total1);

let discountPriceArr = priceArr.map((ele) => 0.9 * ele);
console.log(discountPriceArr);

priceArr.forEach((ele) => console.log(0.9 * ele));
