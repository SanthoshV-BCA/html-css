//this is comment
let name = "santhosh";
const pi = 3.14;
console.log(name);
console.log(pi);
name = "ram ";
console.log(name);
//  alert("haii");
console.log("i am santhosh");

//operators
//simple addition
let a = 10;
let b = 12;
let c = a + b;
console.log(a + "+" + b + "=" + c);

d = 5;
d++;
console.log(d);
d--;
console.log(d);
d += 3;
console.log(d);
d = d ** 2;
console.log(d);
e = 5 / 0;
console.log(e);
f = "sample";
g = 10;
h = 11.2;
i = true;
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);
console.log(typeof i);

//get user input
//  let uname=prompt("Enter your Name: ");
//  alert(uname);

let message = document.getElementById("message");
message.innerHTML = "this is JS text";

let obj = {
  name: "santhosh",
  age: 20,
  city: "pondicherry",
};
console.log(obj);
console.log(obj.name);
function myfunction(name) {
  let msg = "hello " + name + " how are you";
  console.log(msg);
}
myfunction("santhosh");
myfunction("aswin");

console.log("====================");
let as;
for (as = 1; as <= 10; as++) {
  console.log(as + " aswing");
}
