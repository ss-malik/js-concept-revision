// const target = document.querySelector(".target")
// console.log(target);

// const targetId = document.getElementById("heading")
// console.log(targetId);

// const targetId1 = document.getElementById("movie-list")
// console.log(targetId1);

// const targetClass = document.getElementsByClassName("list-item");
// console.log(targetClass);

// const targetTag = document.getElementsByTagName("li");
// console.log(targetTag);

// const targetQuery = document.querySelector("#heading");
// console.log(targetQuery);

// targetQuery.style.color = "red";

// const targetQueryAll = document.querySelectorAll(".list-item")
// console.log(targetQueryAll);

// for(let i = 0; i<targetQueryAll.length; i++){
//     targetQueryAll[i].style.fontSize = "1rem"
// }

// const targetClassAll = document.getElementsByClassName("list-item")
// console.log(targetQueryAll);

// for(let i = 0; i<targetClassAll.length; i++){
//     targetClassAll[i].style.backgroundColor = "green";
//     targetClassAll[i].style.padding = "0.5rem";
//     targetClassAll[i].style.margin = "0.5rem";
//     targetClassAll[i].style.color = "#fff";

// }

const ul = document.querySelector("#movie-list");

const li = document.createElement("li");
ul.append(li);
li.setAttribute("id","yo")
li.setAttribute("class","main-hu-na")
li.classList ="list-item";
li.classList.add("list-no");
li.innerText = "X-man";