let a = { name: "santhosh", age: 20, city: "pondy" };
let txt = "";
for (let x in a) {
  txt += a[x] + " ";
}
document.getElementById("text").innerHTML = txt;
