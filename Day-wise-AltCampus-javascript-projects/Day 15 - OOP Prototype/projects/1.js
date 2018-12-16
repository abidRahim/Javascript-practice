// The Car and the Truck have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

  function Vehicle(driver, mph) {
    this.driver = driver;
    this.speed = mph;
  }

  Vehicle.prototype.drive = function() {
    return this.driver + ' driving at ' + this.speed + ' miles per hour';
  }

  function Truck(driver, mph, cargo) {
    console.log(this);    
    Vehicle.call(this, driver, speed)
    this.cargo = cargo;
  }

  Truck.prototype.loadCargo = function() {
    this.cargo.push(this.cargo);
    return this;
  }

  Truck.prototype.unloadCargo = function() {
    return this.cargo.pop();
  }

  Truck.prototype.__proto__ = Vehicle.prototype;

  var car = new Vehicle("Ravi", 100);
  
  var truck = new Truck("Abid", 90, [1,2,3,4]);

  
// Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out.
  class Person {
    constructor(subject) {
      this.subject = subject;
    }

    teach = function() {
      console.log(this.subject);
    };
  }

  var Teacher = new Person("Chem");



  


