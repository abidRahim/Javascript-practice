console.log(this.document === document); // true

console.log(this === window); //true


var myFunction = function () {
  console.log(this);
};
myFunction(); // Window Object


function f1() {
  'use strict';
  return this;
}
console.log(f1() === window); //False   /*** What is 'use strict' doing here ***/


function foo () {
	console.log("Simple function call");
	console.log(this === window); 
}

foo();	// Simple function call  // True
console.log(this === window) // True


// This for IIFE
(function(){
	console.log("Anonymous function invocation");
	console.log(this === window);
})(); // Anonymous function invocation // True


// This for IIFE in strict mode
(function foo () {
	'use strict';
	console.log("Simple function call")
	console.log(this === window); // False
})();

foo();// Output



var myObject = {};
myObject.someMethod = function () {
  console.log(this); // {someMethod} object
};
myObject.someMethod(); //Value Of This



// This refers to the New Instance

function Person(fn, ln) {
	this.first_name = fn;
	this.last_name = ln;

	this.displayName = function() {
		console.log(`Name: ${this.first_name} ${this.last_name}`); // Name: first name -- last name
	}
}

let person = new Person("John", "Reed");
person.displayName();  // Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName();  // Name: Paul Adams



//This refers to the invoker Object
function foo () {
	'use strict';
	console.log("Simple function call")
	console.log(this === window);  // False
}

let user = {
	count: 10,
	foo: foo,
	foo1: function() {
		console.log(this === window);
	}
}

user.foo()  // Simple function Call // False
let fun1 = user.foo1; 
fun1() // True
user.foo1()  // False


//this will call apply and bind      // *** Important *** //

this.x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX(); // 9

var boundGetX = retrieveX.bind(module);
boundGetX(); // 81


// Call with new constructor


function Person(fn, ln) {
	this.first_name = fn;
	this.last_name = ln;

	this.displayName = function() {
		console.log(`Name: ${this.first_name} ${this.last_name}`);
	}
}

let person = new Person("John", "Reed");
person.displayName(); // John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Paul Adams

persondisplayName.call(person2); // Paul Adams