// we have 3 ways to declare variable

// let , const ,var

// diff b/w let const and var

let userName = "Salman";
userName = "Annu";
console.log(userName);

// with let keyword we can reinitalize the value
// but cannot redecalre value of variable
// while declaring the variable we have privilage to initialize the variable later.

const dob = "24sep";
const boilingTempofWater = "100C";

console.log(dob);
// with const as name suggests its value are constant, js doesn't allow us to reinitialize its value
// if we try to do so it will going to throw us a error Errormsg -  "Assignment to const variable"

var myName = "Salman";
var myName = "Annu";
console.log(myName);

// var is a old way of initialize the variable it is most prone to errors,
// with it we can redecalare the same variable with different value also
// we can also reinitialize the same variable with different value

// variable naming convention

let name;
let userFavTeacherName;
let _;
let $;
let user1;
let user_$;

// names must be meaningful such as userName, neither x nor abc.
