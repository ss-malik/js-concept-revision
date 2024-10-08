// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// async function data() {
//   let apiCall = await fetch("https://dummyjson.com/products");
//   let jsondata = await apiCall.json();
//   console.log(jsondata);
// }
// data();

function sum(a, b) {
  console.log(a + b);
}

setTimeout(() => {
  sum(2, 3);
}, 2000);
