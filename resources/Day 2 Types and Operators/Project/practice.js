// Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”
var password = prompt('Enter new password');
var confirmPassword = prompt('Confirm password');

if(password === confirmPassword) {
  console.log("Password set");  
}
else {
  console.log("Password does not match");  
}


// Find the output of the following
// Logical AND operation
// true  && true; - true
// true  && false; - false
// false && true; - false
// false && false; - false



// Logical OR operation
// true  || true; - true
// true  || false; - true
// false || true; - true
// false || false; - false

// "foo" && "bar"; - "bar"
// "bar" && "foo"; - "foo"
// "foo" && ""; - ""
// ""    && "foo"; ""

// "foo" || "bar"; - "foo"
// "bar" || "foo"; - "bar"
// "foo" || ""; - "foo"
// ""    || "foo"; - "foo"



// Output of this alert( alert(1) || 2 || alert(3) );

// 2 will be its output


// Create a function which takes two input and (a,b) and display the sum, sub, multiplication, devision of those two numbers.

function calc(a,b){
 
  var sum = a + b;
  var mul = a * b;
  var sub; var div;

  if (a>b) {
   sub = a - b;
   div = a / b;
  }

  else {
    sub = b - a;
    div = b / a;
  }

  console.log("Addition of two given numbers: " + sum);
  console.log("Subtraction of two given numbers: " + sub);
  console.log("Multiplication of two given numbers: " + mul);
  console.log("Division of two given numbers: " + div);
  
}

// Function to display a number if user enters negative number

function checkNeg {
  var num = prompt("Enter a number");

  if(num<0){
    console.log("The number you have entered is -ve");    
  }
  else {
    console.log("The number you have entered is NOT -ve");
    
  }
}

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var i=0;
var sum = 0;

for(i=0;i<1000;i++) {
  if(i%3 == 0 || i%5 == 0){
    sum += i; 
  }
}

console.log(sum);



// If user enters positive number, that number won't be displayed

function checkPos() {
  var num = prompt("Enter a number");

  if(num>0){
    return;
  }
  else {
    alert("Number you entered is: " + num);
  }
}



// Funnction to check whether an integer entered by the user is odd or even
function oddEven() {
  var num = prompt("Enter a number");

  if(num%2 == 0){
    alert("Even number");    
  }
  else {
    alert("Odd number");
    
  }
}


// Funnction to take two input and show the relation using =, > or < i.e (21,45) 21 < 45, (23,12) 23 > 12




function compare() {
var a = prompt("Enter 1st number");
var b = prompt("Enter 2nd number");
  if(a > b) {
    alert(a + " > " + b);
  }
  else if(a == b) {
    alert(a + " = " + b);    
  }
  else (b < a) {
    alert(a + " < " + b);
  }
}

// Funnction to Check Whether a Character is Vowel or Consonant


function checkVowel() {  
  var character = prompt("Enter a character");

  if(character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
    alert("The character you entered is a vowel ");
  }
  
  else {
    alert("The character you entered is a consonant");
  }
}

// Funnction to Find the Largest Number Among Three Numbers

function largest(a,b,c) {
  if(a>b && a>c) {
    console.log( a + " is largest of the three numbers");    
  }

  else if(b>c) {
    console.log( b + " is the largest of the three numbers");    
  }

  else {
    console.log( c + " is the largest of the three numbers");    
  }
}


//Switch
// You are given a variable, . Your task is to print:
// - ONE, if num is equal to . 
// - TWO, if num is equal to .
// - THREE, if num is equal to .
// - FOUR, if num is equal to .
// - FIVE, if num is equal to .
// - SIX, if num is equal to .
// - SEVEN, if num is equal to .
// - EIGHT, if num is equal to .
// - NINE, if num is equal to .
// - PLEASE TRY AGAIN, if  is none of the above.

function num_display(num) {
  switch(num) {
    case 1 : 
      console.log("ONE");
      break;    
    case 2 :
      console.log("TWO");
      break;
      case 3 :
      console.log("THREE");
      break;  
    case 4 :
      console.log("FOUR");
      break;  
    case 5 :
      console.log("FIVE");
      break;  
    case 6 :
      console.log("SIX");
      break;  
    case 7 :
      console.log("SEVEN");
      break;  
    case 8 :
      console.log("EIGHT");
      break;  
    case 9 :
      console.log("NINE");
      break;  
  }
}

// You are given a variable marks. Your task is to print:
// - AA if marks is greater than 90.
// - AB if marks is greater than 80 and less than or equal to 90
// - BB if marks is greater than 70 and less than or equal to 80
// - BC if marks is greater than 60 and less than or equal to 70
// - CC if marks is greater than 50 and less than or equal to 60
// - CD if marks is greater than 40 and less than or equal to 50
// - DD if marks is greater than 30 and less than or equal to 40
// - FF if marks is less than or equal to 30

function marks(num) {
  switch(true) {
    case (num>=90):
      console.log("Grade: AA");
      break;
    case (num<90 && num>=80 ):
      console.log("Grade: AB");
      break;
    case (num<80 && num>=70 ):
      console.log("Grade: BB");
      break;
    case (num<70 && num>=60 ):
      console.log("Grade: BC");
      break;
    case (num<60 && num>=50 ):
      console.log("Grade: CC");
      break;
    case (num<50 && num>=40 ):
      console.log("Grade: CD");
      break;
    case (num<40 && num>=30 ):
      console.log("Grade: DD");
      break;
    case (num<=30 ):
      console.log("Grade: FF");
      break;
  }
}


// Funnction to generate Multiplication Table of a given number (use alert for number input)

function mul_table() {
  const num = prompt("Enter a Number");

  for(let i=1; i<=10; i++) {
    console.log(`${num} x ${i} = ${num*i}`);
  }
}

// Funnctionn to calculate the Factorial of a Number

const num = prompt("Enter a number");

var result;
function factorial(num) {
  return num*factorial(num-1);
}

// Output: var x = 10 + "1"; console.log(x); typeof x;

// string

//  Solve: 225 % 6 = ?

// 3

// Take two numbers and what to do with that number from user.
// Define an object with these function (add, sub, multiply, divide). Perform the operation

const num01 = prompt("Enter 1st number");
const num02 = prompt("Enter 2nd number");

var obj = {
  add: function(a,b) {
    alert(+a + +b);
  },
  sub: function(a,b) {
    alert(a - b);
  },
  multiply: function(a,b) {
    alert(a * b);
  },
  divide: function(a,b) {
    alert(a / b);
  }
}

obj.add(num01,num02); //Addition
obj.sub(num01,num02); //subtraction
obj.multiply(num01,num02); //multiplication
obj.divide(num01,num02); //division

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function fibonacci() {
  
  let fib = 0;
  let sum = 1;
  let fib_sum = 0;
  let summy = 0;


  var num = prompt("Enter the limit to generate fibonacci no", 0);

  for(let i=3; i <= num ; i++) {
    fib_sum = fib + sum;
    fib = sum;
    sum = fib_sum;

    if(fib_sum<4000000){
      if(fib_sum%2 == 0){
        summy += fib_sum;
      }
    }
  }    
  console.log(fib_sum);
  
  console.log(summy);    
}

fibonacci();