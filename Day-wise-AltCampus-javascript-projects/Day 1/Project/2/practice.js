// Log message in console saying "I'm Learning Javascript"

console.log("I'm Learning Javascript");


// var name = "Mark";  "Mark" is a string.  What is name?

var name = "Mark";


// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

var name0 = "John";

var admin = name0; 

console.log(admin);



// Use alert function to to show a message saying “Hello World”  https://javascript.info/alert-prompt-confirm

alert("hello world");


// Write a function which uses prompt to take the name of person and greets them. i.e "Welcome Arun"

/*
function greet() {
  let name1 = prompt("Enter you name");
  alert(`Welcome ${name1}`);
}

greet(); 
*/


// Modify the previous program such that only the users Alice and Bob are greeted with their names.


/* function greet() {
}
let name1 = prompt("Enter your name");
if(name1 == "Alice" || "Bob"){  
alert(`Welcome ${name1}`);
} */

function greet() {
  let name1 = prompt("Enter your name");

  if(name1 == "Alice") {  
    alert( `Welcome ${name1}` );
  } else if(name1 == "Bob") {
    alert( `Welcome ${name1}` );    
  }  
}

greet(); 

// Find the error if any (var product cost = 3.45;)

function cost() {
  var productCost = prompt("Enter product Cost");
  
  if(productCost == 3.45) {
    alert("Error: Wrong cost entered");
  }

}

// cost();

// product cost is a wrong variable name


// Write a function that takes 'user' as an argument and log a message in console saying "Hello Sam, How are you doing?" if name of the user passed is "Sam"

var name3 = prompt("Hello User, Enter your name");

function user(check) {
  //*** empty line between logical blocks */
  if (check == "Sam") {
    console.log("Hello Sam, How are you doing?");    
  }
}

user(name3);


// Right or Wrong
//   "Hello World" | right
//   'Hello World" | wrong
//   "Hello World' | wrong
//   'Hello World' | right



// Get an input from the user using the prompt box and display the length of the string.
// e.g “Learning is fun” should output will be 15.

var sentence = prompt( "Write something" );

var displayLength = alert( `length of the string entered is ${sentence.length}` );


// Age of the owner
var age = 26;

// Calculate the age of the dog if owner's age is 7 times of dog

var dogAge = age / 7; //***  space aroud operators 

// Use console.log() function to log the age of the dog 

console.log(dogAge);


// Marks and max marks of the student
var studentScore = 41
var maxScore = 100
// Calculate the percentage of marks the student got

var percentage = (studentScore / maxScore) * 100;

// log the percentage in console using console.log()

console.log( `${percentage}%` );



var city = 'Dharamshala'
var country = 'India'
// Make a function which can alert the message "Dharamshala, India"

// alert(`${city}, ${country}`);

alert(city + " , " + country);