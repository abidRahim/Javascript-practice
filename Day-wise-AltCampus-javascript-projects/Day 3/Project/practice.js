// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

let job = prompt("Enter your job title");
let children = prompt("Enter the number of childrens you have");
let spouse = prompt("Enter the name of your spouse");
let geo_location = prompt("Enter the name of your location");

function tellFortune(children, spouse, geo_location, job) {
  alert(`You will be a ${job} in ${geo_location}, and married to ${spouse} with ${children} kid(s)`);
}

tellFortune(children, spouse, geo_location, job);


// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Add an additional argument to the function that takes the conversion rate of human to dog years.

const puppy_age = prompt("Enter your dog's age");

function calculateDogAge(age) {
  alert(`${age *= 7}`);
}

calculateDogAge(puppy_age);

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Accept floating point values for amount per day, and round the result to a round number.

const age = prompt("Enter age");
const amount = prompt("Enter the expense per day");

const calculateSupply = function(age, amount) {
  alert(`You will need ${amount*age*365} to last you until the ripe old age of ${age}`);
};

console.log(calculateSupply(age, amount));

// Create a function called celsiusToFahrenheit :
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

const celsius = prompt("Enter a celsius value to convert to °F");

function celsiusToFahrenheit(celsius) {
  alert(`${celsius}°C is ${(celsius*(9/5)) + 32}° Fahrenheit`);
}
const fahrenheit = prompt("Enter a Fahrenheit value to convert to °C")

(function fahrenheitToCelsius(fahrenheit) {
  alert(`${fahrenheit}°F is ${(fahrenheit*(9/5)) + 32}° Celsius `);
})();

celsiusToFahrenheit(celsius);
fahrenheitToCelsius(fahrenheit);

//1. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
// Will the function work differently if else is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
// Is there any difference in the behavior of these two variants?

// No Difference




// 2. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}

// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||

// Using ternary operator 
function checkAge(age) {
  return (age > 18) ? true : confirm('Do you have your parents permission to access this page?');
}

// Using OR ||
function checkAge(age) {
  return (age > 18) || confirm('Do you have your parents permission to access this page?');
}

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
// In this task the function should support only natural values of n: integers up from 1.

const num = prompt("Insert a number for exponential result");
const exp = prompt("Insert an exponent");


function pow(a, b) {
  let result = a;

  for(let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
}

pow(num, exp);

// Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.

const sentence = prompt("Enter a string");
let count = 0;

function countVowel(sen) {
  for(let i = 0; i < sen.length; i++) {
    
    switch(sen[i]) {
      case 'a':
      case 'A':
      case 'e':
      case 'E':
      case 'i':
      case 'I':
      case 'o':
      case 'O':
      case 'u':
      case 'U':
        count++;
        break;
    }
    
    
    // if(sen[i] == "a" || sen[i] == "e" || sen[i] == "i" || sen[i] == "o" || sen[i] == "u"  ) {
      //   count++;
      // }
    }
    if (count == 0) {
      alert("No vowels found");
    }
    alert(count);
}

countVowel(sentence);

// Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”

const userString = prompt("Enter the string");

function checkPalindrome(pal) {

  var flag = true;
  var j = 0;

  // loop to check characters from the end till the mid characters
  for (let i = pal.length - 1; i > pal.length / 2; i--) { 
    if(pal[i] != pal[j]) {
      flag = false;
      break; // Breaks out of the loop
    }
    j++;
  }

  if(flag) {
    alert( `${pal} is palindrome` );
  } else {
    alert( "Its not a palindrome" );
  }
}

checkPalindrome(userString);

// Counts the number of individual words in a string. For added complexity read these strings in from a text file and generate a summary.


function countWords(text) {

  let count = 0;
  
  for(let i = 0; i < text.length; i++) {
    
    if(text[i] === " ") {
      count++;
    }
  }
  
  return count + 1;
}

// Show the following output using one loop.
    // 1, 2, 3, 4, 5
    // 6, 7, 8, 9, 10

  // ***Doubt***
  function series(num) {
    for(let i = 1; i <= num; i++) {
      if(i % 5 == 0) console.log(i + "\n");
      else console.log(i);      
    }
  }


// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

function possibility() {
  let sum = 0; factorial = 1;
  let num = prompt("Enter a number: ");
  let choice = prompt("Choice: 'sum' or 'multiply' ");

  switch( choice ) {
    case 'sum': for(let i = 1; i <= num; i++) {
        sum += 1;
      }
      console.log(`Sum: ${sum}`);
    }
    break;
    case 'multiply': for(let i) //* * * complete the for loop
}

// Write a function that returns the largest element in a list.

function largest(arr) {

  let temp = arr[0];

for(let i = 1; i < arr.length; i++) { //* * *space around operators
  if(arr[i] > temp) temp = arr[i];
}
console.log(temp);
}

// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

function numSum() {
  let sum = 0;
  let num = prompt("Enter number : ");

  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  
  console.log(`Sum : ${sum}`);
}

// Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

function multiSum() {
  let sum = 0;
  let num = prompt("Enter number : ");

  for (let i = 1; i <= num; i++) {

    if (i % 5 == 0 || i % 7 == 0) sum += i;

  }

  console.log(`Sum : ${sum}`);
}

// Write a program that takes a number under (25) and prints the multiplication table for the number.

function multiplication(){

  var num, limit;

  num = prompt("Enter a number :");

  if(num > 25) {
    alert("Number is greater than 25");

    return;
  }
  
  limit = prompt("Enter Limit : ");

  for (var i = 1; i <= limit; i++) {
    console.log(`${i}X${num}=${i*num}`);
  }
}