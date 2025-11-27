// Variable Scope 

var y;
y = 2;


// Hoisting Example
y = 2;
var y;

//3 declartion scope 
var y 
console.log("this is y ", y)
y =10 

//4
y= 10
console.log("this is y ", y)
var y 
console.log("this is y ", y)

// You can redeclare var but not let. Will take the last value if nothing delcared otherwise 
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined

//4.5 
//let a = 1;
//let a = 2;
console.log(a); // 2
//let a;
console.log(a); // 2; not undefined

//5 
/*
Shorthand Declaration 
b=9 is evaluated first, however b is not actually declared with var so it becomes part of the global object. 
e.g window.b

a is declared with var, so it becomes a function scope 
technically what it is doing is var a = (result of b = 9)

strict mode stops this 
*/
var a = b = 9 
console.log(a, " ", b)

// Safer way to do it 
var a, b;
a = b = 9;





/*
    window.a // undefined 
    window.b // 9

*/


function scope(){
    if (true){
    var a = b = 9 
    }
    console.log(a)
}
console.log(a)
console.log(b)

// Let and creating block scope
function scope(){
    if (true){
    let a = b = 9 
    }
    console.log(a)
}


// Block scope access issues 
if (true) {
  const x = 10;
}
console.log(x); // 10 (accessible outside the block)

if (true) {
  let y = 10;
}
console.log(y); 


//inside function global objects 
// with let
// It is bound to the for statement, you can't use it anywhere else 
function loopDemo2(){
    for (let counters = 0; counters < 3; counters++){
        console.log(counters)
    } 
    console.log("In function", counters)
    

}
console.log("Outside function", counters)


//inside function global objects 
// with var 
function loopDemo(){
    for (var counter = 0; counter < 3; counter++){
        console.log(counter)
    } 
    console.log("In function", counter)
    

}
console.log("Outside function", counter)

//inside function global objects 
// with let
// It is bound to the for statement, you can't use it anywhere else 
function loopDemo2(){
    for (let counters = 0; counters < 3; counters++){
        console.log(counters)
    } 
    console.log("In function", counters)
    

}
console.log("Outside function", counters)


//without a declaration becomes global and part of the global object.
function loopDemo3(){
    for (m = 0; m < 3; m++){
        console.log(m)
    } 
    console.log("In function", m)
    

}


//console.log("Outside function", m)


// ternary 
var age = 21 
const ter = age ? "Beer": "Juice"
console.log(ter)


function doSomething() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}


let count = 1;

do {
    console.log("Count is: " + count);
    count++;
} while (count <= 5);



let count2 = 1;

while (count2 <= 5) {
    console.log("Count is: " + count);
    count++;
}

//// BREAK and While Loop 
let number = 8;

while (true) {
    console.log(number);
    number++;
    if (number > 15) {
        console.log("infinite loop break");
        break;
    }
}




function showingSwitch() {
  let day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day)
}

function showingSwitch2() {
  let text;
  switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
  console.log(text)
}


// An alternate using array 
function showingSwitchArray() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[new Date().getDay()];
  console.log(day);
}


//Switches are useful when you have multiple discrete variables that you know ahead of time. 
const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("You chose apple!");
    break;
  case "banana":
    console.log("You chose banana!");
    break;
  case "orange":
    console.log("You chose orange!");
    break;
  default:
    console.log("Unknown fruit");
}

//.toLowerCase()



function doWhile() {
  var counter = 0;
  do {
    console.log("The " + counter + " log");
    counter = counter + 1;
  }
  while (counter < 5);

}

function forLoop() {
  var text = 0;
  for (let i = 0; i < 10; i = i + 2) {
    text += i;
    console.log(text);
  }

}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//console.log(arr.indexOf(6))
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//console.log(arr.indexOf(6))


arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
function arrayLoop(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
//arr.splice(3,2)
//arr.pop()
//arr.shift()



function arrayLoop(arr) {
  for (i = 0; i < arr.length; i = i + 2) {
    console.log(i)
  }
}


try {
	incorrectfunction()
} catch (error){
	console.log(error)
} finally {
	console.log("The programme failed, exiting safeley")
}

// show binding 
try {
	throw "Hello hello"
} catch (error){
	let error = "bob"
} finally {
	console.log("The programme failed, exiting safeley")
}

// Can't redeclare 
try {
	throw "Hello hello"
} catch (statement){
	let statement = "bob"
} finally {
	console.log("The programme failed, exiting safeley")
}


try {
	throw "Hello hello"
} catch (error){
	let statement = error + "bob"
    console.log(statement)
} finally {
	console.log("The programme failed, exiting safeley")
}

//blocked scoped 
try {
	throw "Hello hello"
} catch (error){
	let statement = error + "bob"
    console.log(statement)
} finally {
	console.log("The program failed, exiting safeley")
    console.log(statement)
}


