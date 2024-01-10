// collapse

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      // a.innerHTML = "+";
    } else {
      content.style.display = "block";
      // a.innerHTML = "-";
    }
  });
}
function changeMe() {
  var div = document.getElementById("plus1").innerHTML;
  if (div === "+") {
    document.getElementById("plus1").innerHTML = "-";
  } else {
    document.getElementById("plus1").innerHTML = "+";
  }
}
function changeMe2() {
  var div = document.getElementById("plus2").innerHTML;
  if (div === "+") {
    document.getElementById("plus2").innerHTML = "-";
  } else {
    document.getElementById("plus2").innerHTML = "+";
  }
}
function changeMe3() {
  var div = document.getElementById("plus3").innerHTML;
  if (div === "+") {
    document.getElementById("plus3").innerHTML = "-";
  } else {
    document.getElementById("plus3").innerHTML = "+";
  }
}
function changeMe4() {
  var div = document.getElementById("plus4").innerHTML;
  if (div === "+") {
    document.getElementById("plus4").innerHTML = "-";
  } else {
    document.getElementById("plus4").innerHTML = "+";
  }
}
function changeMe5() {
  var div = document.getElementById("plus5").innerHTML;
  if (div === "+") {
    document.getElementById("plus5").innerHTML = "-";
  } else {
    document.getElementById("plus5").innerHTML = "+";
  }
}
function changeMe6() {
  var div = document.getElementById("plus6").innerHTML;
  if (div === "+") {
    document.getElementById("plus6").innerHTML = "-";
  } else {
    document.getElementById("plus6").innerHTML = "+";
  }
}
function changeMe7() {
  var div = document.getElementById("plus7").innerHTML;
  if (div === "+") {
    document.getElementById("plus7").innerHTML = "-";
  } else {
    document.getElementById("plus7").innerHTML = "+";
  }
}
function changeMe8() {
  var div = document.getElementById("plus8").innerHTML;
  if (div === "+") {
    document.getElementById("plus8").innerHTML = "-";
  } else {
    document.getElementById("plus8").innerHTML = "+";
  }
}
function changeMe9() {
  var div = document.getElementById("plus9").innerHTML;
  if (div === "+") {
    document.getElementById("plus9").innerHTML = "-";
  } else {
    document.getElementById("plus9").innerHTML = "+";
  }
}
function changeMe10() {
  var div = document.getElementById("plus10").innerHTML;
  if (div === "+") {
    document.getElementById("plus10").innerHTML = "-";
  } else {
    document.getElementById("plus10").innerHTML = "+";
  }
}
function changeMe11() {
  var div = document.getElementById("plus11").innerHTML;
  if (div === "+") {
    document.getElementById("plus11").innerHTML = "-";
  } else {
    document.getElementById("plus11").innerHTML = "+";
  }
}
function changeMe12() {
  var div = document.getElementById("plus12").innerHTML;
  if (div === "+") {
    document.getElementById("plus12").innerHTML = "-";
  } else {
    document.getElementById("plus12").innerHTML = "+";
  }
}
function changeMe13() {
  var div = document.getElementById("plus13").innerHTML;
  if (div === "+") {
    document.getElementById("plus13").innerHTML = "-";
  } else {
    document.getElementById("plus13").innerHTML = "+";
  }
}
function changeMe14() {
  var div = document.getElementById("plus14").innerHTML;
  if (div === "+") {
    document.getElementById("plus14").innerHTML = "-";
  } else {
    document.getElementById("plus14").innerHTML = "+";
  }
}
// form validation
const form = document.querySelector("#forms");
const firstname = document.querySelector(".fir");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const country = document.querySelector("#india");
const state = document.querySelector("#state");
const city = document.querySelector("#city");
const discription = document.querySelector("#discription");

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  }
});

function validateInputs() {
  const firstnameval = firstname.value.trim();
  const lastnameval = lastname.value.trim();
  const emailval = email.value.trim();
  const phoneval = phone.value.trim();
  const conuntryval = country.value.trim();
  const stateval = state.value.trim();
  const cityval = city.value.trim();
  const discriptionval = discription.value.trim();
  let success = true;

  if (firstnameval === "") {
    success = false;
    setError(firstname, "Firstname is Required");
  } else {
    setSuccess(firstname);
  }
  if (lastnameval === "") {
    success = false;
    setError(lastname, "Lastname is Required");
  } else {
    setSuccess(lastname);
  }
  if (emailval === "") {
    success = false;
    setError(email, "Email is Required");
  } else if (!validateEmail(emailval)) {
    success = false;
    setError(email, "Please enter a valid email");
  } else {
    setSuccess(email);
  }
  if (phoneval === "") {
    success = false;
    setError(phone, "please enter a phone number");
  } else if (!validatePhoneNumber(phoneval)) {
    setError(phone, "Please enter a valid phone number");
  } else {
    setSuccess(phone);
  }
  if (conuntryval === "") {
    sesuccess = false;
    setError(country, "country is required");
  } else {
    setSuccess(country);
  }
  if (stateval === "") {
    success = false;
    setError(state, "State is required");
  } else {
    setSuccess(state);
  }
  if (cityval === "") {
    success = false;
    setError(city, "City is required");
  } else {
    setSuccess(city);
  }
  if (discriptionval === "") {
    success = false;
    setError(discription, "Discription is required");
  } else if (discriptionval.length <= 20) {
    success = false;
    setError(discription, "write discription above 20 words");
  } else {
    setSuccess(discription);
  }

  return success;
}

function setError(element, message) {
  let inputGroup = element.parentElement;
  let errorElement = inputGroup.querySelector(".error");
  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  let inputGroup = element.parentElement;
  let errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validatePhoneNumber(phone) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return re.test(phone);
}
