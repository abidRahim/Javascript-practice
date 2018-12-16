// 1. Factory function //

  var studFunctions = {
    percentage: function() {
      let avg = (this.phy + this.chem + this.math) / 3;
      let perAge = (avg / 300) * 100;
      return perAge;
    },

    passOrFail: function() {
      let avg = (this.phy + this.chem + this.math) / 3;
      let perAge = (avg / 300) * 100;
      return (perAge >= 40) ? "PASS" : "FAIL;"
    }
  }

  function studCreator(p, c, m) {
    var obj = Object.create(studFunctions);

    obj.math = m;
    obj.phy = p;
    obj.chem = c;

    return obj;
  }

  var abid = studCreator(90, 80, 70);


  // ------------------------------------------------------------------- //

  var empFunctions = {
    avgHours: function() {
      let hoursSpent = this.hours / 26;
      return hoursSpent;
    }
  }
  var salesFuncitons = {
    targetAchieved: function() {
      if(this.target == this.sales) return true;
      else false;
    }
  }

  function empCreator(name, id) {
    var origObj = Object.create(empFunctions);

    obj.name = name;
    obj.id = id;

    return origObj;
  }

  function salesCreator(name, id, target, sales, hours) {
    var obj = Object.create(salesFuncitons);
    obj.prototype = empCreator(name, id);

    obj.target = target;
    obj.sales = sales;
    obj.hours = hours;

    Object.setPrototypeOf(obj, obj.prototype);

    return obj;      
  }

  var batch1 = salesCreator( "kiran", 404, 20, 20, 200);

// -------------------------------Another Way-------------------------------- //

var empFunctions = {
  avgHours: function() {
 
    let hoursSpent = this.hours / 26;
    return hoursSpent;
  }
}
var salesFuncitons = {
  targetAchieved: function() {
    if(this.target == this.sales) return true;
    else false;
  }
}

function empCreator(name, id) {
  var origObj = Object.create(empFunctions);

  origObj.name = name;
  origObj.id = id;

  return origObj;
}

function salesCreator(name, id, target, sales, hours) {
  var obj = Object.create(salesFuncitons);
  obj.prototype = empCreator(name, id);

  obj.target = target;
  obj.sales = sales;
  obj.hours = hours;

  Object.setPrototypeOf(obj, obj.prototype);

  return obj;
}

var batch1 = salesCreator( "kiran", 404, 20, 20, 200);

// ---------------------------------------------------------------------------------- //



// ---------------------------------------------------------------------------------- //

// 2. Psuedo Classical //

  function StudentMarks(p, c, m) {
    this.phy = p;
    this.chem = c;
    this.math = m;
  }
  
  studentMarks.prototype.percentage = function() {
    let avg = (this.phy + this.chem + this.math) / 3;
    let perAge = (avg / 300) * 100;
    return perAge;
  }

  studentMarks.prototype.total = function() {
    let tot = this.phy + this.chem + this.math;
    return tot;
  }

  studentMarks.prototype.passOrFail = function() {
    let avg = (this.phy + this.chem + this.math) / 3;
    let perAge = (avg / 300) * 100;
    return (perAge >= 40) ? "PASS" : "FAIL;"
  }

  var abid = new studentMarks(40, 50, 60);
  var rishi = new studentMarks(60, 70, 80);

  abid.percentage();
  
// ---------------------------------------------------------------------------------- //

function empCreator(name, id) {
  this.name = name;
  this.id = id;  
}

function salesCreator(hours, sales, target) {
  this.hours = hours;
  this.sales = sales;
  this.target = target;
}

empCreator.prototype.avgHours = function() {
  let hoursSpent = this.hours / 26;
  return hoursSpent;
}

salesCreator.prototype.targetAchieved =  function() {
  if(this.target == this.sales) return true;
  else false;
}

var salesObj = new salesCreator(240, 30, 30);
var empObj = new empCreator("nameX", 404);

Object
var newEmp = salesCreator.bind(empObj);



// 3. Classes //

  class studCreator {
    constructor(p, c, m) {

      this.phy = p;
      this.chem = c;
      this.math = m;
    }

    percentage() {
      let perAge = (this.phy + this.chem + this.math) / 3;
      return perAge;
    }
  
    total() {
      let tot = this.phy + this.chem + this.math;
      return tot;
    }
  
    passOrFail() {
      let perAge = (this.phy + this.chem + this.math) / 3;
      return (perAge >= 40) ? "PASS" : "FAIL;"
    }

    isStudent = true;
  }

  var abid = new studCreator(90, 80, 70);



  // ------------------------------------------------------


  var empFunctions = {
    avgHours: function() {
      let hoursSpent = this.hours / 26;
      return hoursSpent;
    }
  }
  var salesFuncitons = {
    targetAchieved: function() {
      if(this.target == this.sales) return true;
      else false;
    }
  }


  function salesCreator(name, id, target, sales, hours) {
    var obj = Object.create(salesFuncitons);

    var obj2 = Object.create(empFunctions);

    obj.target = target;
    obj.sales = sales;
    
    obj2.name = name;
    obj2.id = id;
    obj2.hours = hours;

    Object.setPrototypeOf(obj,obj2);

    return obj;      
  }

  // ------------------------------------------------------------------------------ //