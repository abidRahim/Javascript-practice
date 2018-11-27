//1. Pick a penguin from Wikipedia's List of Fictional Penguins (https://en.wikipedia.org/wiki/List_of_fictional_penguins) and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).

let penguin = {
  name: "Captain",
  origin: "Mr. Popper's Penguins",
  author: "Richard and Florence Atwater"
}

//2. Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"

console.log(penguin);


//. Write another line of code that adds a new property to your penguin called canFly and set it to false.

penguin["canFly"] = false;


//4. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?"


penguin["chirp"] = () => console.log("CHIRP CHIRP! Is this what penguins sound like?");



//5. Add another method to your penguin called sayHello that prints to the console the same message from problem 2 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way the sayHello method could potentially work for any penguin that has a name!


// ***Doubt***
penguin["sayHello"] = () => console.log(`${this.name} CHIRP CHIRP! Is this what penguins sound like?`); 

penguin["sayHello"] = function() {
   console.log(`${this.name} CHIRP CHIRP! Is this what penguins sound like?`); 
  };
   

//6. Next, call your penguin's sayHello() method and make sure that it works!

// 2nd method worked

//7. Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.

penguin["name"] = "Penguin McPenguinFace";

//8. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.

penguin["fly"] = () =>  (this.canFly == true) ? console.log("I can fly!") : console.log("No flying for me!");


//9. Call your penguin's fly() method and make sure it works!

// Worked

//10. Change the canFly property to true -- again, without modifying any of your previous code!

penguin.canFly = true;

//11. Now call your penguin's fly() method again and make sure it works as expected!
//1. Pick a penguin from Wikipedia's List of Fictional Penguins (https://en.wikipedia.org/wiki/List_of_fictional_penguins) and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).

let penguin = {
  name: "Captain",
  origin: "Mr. Popper's Penguins",
  author: "Richard and Florence Atwater"
}

//2. Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"

console.log(penguin);


//. Write another line of code that adds a new property to your penguin called canFly and set it to false.

penguin["canFly"] = false;


//4. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?"


penguin["chirp"] = () => console.log("CHIRP CHIRP! Is this what penguins sound like?");



//5. Add another method to your penguin called sayHello that prints to the console the same message from problem 2 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way the sayHello method could potentially work for any penguin that has a name!


penguin["sayHello"] = function() {
   console.log(`${this.name} CHIRP CHIRP! Is this what penguins sound like?`); 
  };
   

//6. Next, call your penguin's sayHello() method and make sure that it works!

// 2nd method worked

//7. Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.

penguin["name"] = "Penguin McPenguinFace";

//8. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.

penguin["fly"] = function() { 
  (this.canFly == true) ? console.log("I can fly!") : console.log("No flying for me!");
}


//9. Call your penguin's fly() method and make sure it works!

// Worked

//10. Change the canFly property to true -- again, without modifying any of your previous code!

penguin.canFly = true;

//11. Now call your penguin's fly() method again and make sure it works as expected!

// Worked

//12. Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)

for( obj in penguin ) {
  console.log(obj);  
}

//13. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)

for( obj in penguin ) {
  console.log(penguin[obj]);  
}

// Did not work

//12. Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)

for( obj in penguin ) {
  console.log(obj);  
}

//13. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)

for( obj in penguin ) {
  console.log(penguin[obj]);  
}