const heading = document.getElementById("heading");
console.log(heading);

// query-single
const queryById = document.querySelector("#heading");
console.log(heading);

// multiple Selectors
// Elements by tag name

const byTags = document.getElementsByTagName("h2");
console.log(byTags);

const byClass = document.getElementsByClassName("sub-heading");
console.log(byClass);

const query = document.querySelectorAll(".sub-heading");
console.log(query);

const ul = document.createElement("ul");
ul.setAttribute("id", "unorderedList");
document.body.append(ul);
console.log(ul);
const data = ["computer", "mobile", "labtop", "monitor", "mouse"];
const li = document.createElement("li");
// for (let i = 0; i < data.length; i++) {
//   const li = document.createElement("li");
//   li.innerText = data[i];
//   ul.append(li);
// }
for (let ele of data) {
  const li = document.createElement("li");
  li.innerText = ele;
  ul.append(li);
}

// we will going to prefer addEVLis over onClick types of event handlers
// as they replace each other,
// addEventListener
const form = document.querySelector("form");
const range = document.querySelector("#range");
const submit = document.querySelector("#submit");

const para = document.createElement("p");

range.addEventListener("input", (e) => {
  e.preventDefault();
  console.log(e.target.value, "e.target.value");
  console.log(e);

  para.innerText = range.value;
  form.append(para);
});
console.log(range, submit, form);
