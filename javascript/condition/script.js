let a = 10;
let b = 20;
if (a <= b) {
  console.log("a is grater than b");
}

//if else
let age = 14;
if (age <= 18) {
  console.log("your are eligible for vote");
} else {
  console.log("your are not eligible for vote");
}

//else if
let mark = 60;
if (mark <= 100 && mark >= 90) {
  console.log("A+ Grade");
} else if (mark <= 90 && mark >= 80) {
  console.log("A Grade");
} else if (mark <= 80 && mark >= 70) {
  console.log("B+ Grade");
} else if (mark <= 70 && mark >= 60) {
  console.log("B Grade");
} else if (mark <= 60 && mark >= 50) {
  console.log("C Grade");
} else if (mark <= 50 && mark >= 40) {
  console.log("D Grade");
} else if (mark <= 40 && mark >= 0) {
  console.log("FAIL");
} else {
  console.log("invalid mark");
}
//swith case
let day = 8;
switch (day) {
  case 1: {
    console.log("sunday");
    break;
  }
  case 2: {
    console.log("Monday");
    break;
  }
  case 3: {
    console.log("Tuesday");
    break;
  }
  case 4: {
    console.log("Wednesday");
    break;
  }
  case 5: {
    console.log("Thursday");
    break;
  }
  case 6: {
    console.log("Friday");
    break;
  }
  case 7: {
    console.log("Saturday");
    break;
  }
  default: {
    console.log("Invalid day");
  }
}
//forloop
let x;
let y = 10;
for (x = 1; x <= 10; x++) {
  console.log(x + " X " + y + " = " + x * y);
}

//while loop    
let z = 1;
while (z <= 10) {
  console.log(z);
  z++;
}
//dowhile
let aa = 10;
do {
  console.log(aa);
  aa--;
} while (aa == 1);
