let str = "my name is is is Salman";
let word = "is";

function totaCountOfWord(str, word) {
  let arrOfStr = str.split(" ");
  let number = 0;
  for (let item of arrOfStr) {
    if (item === word) {
      number = number + 1;
    }
  }
  return number;
}

console.log(totaCountOfWord(str, word));
