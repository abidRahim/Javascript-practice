// User Object //

var userFunc = {
  increaseScore: function() {
    return ++this.score;
  }
}

function UserCreator(name, score) {
  var userObj = Object.create(userFunc);

  userObj.name = name;
  userObj.score = score;

  return userObj;
}

var user1 = userCreator("Will", 3);
var user2 = userCreator("Tim", 5);
var user3 = userCreator("Eva", 9);

// Paid user object

var paidUserFunc = {
  increaseBalance: function() {
    return ++this.bonusScore;
  }  
}

var moderatorFunc = {
  sharedPublicMessage: function() {
    return this.message;
  }
}


function PaidUserCreator(name, score, accountBalance) {
  var paidUserObj = Object.create(paidUserFunc);
  
  var user = userCreator(name, score);
  paidUserObj.bonusScore = accountBalance;

  Object(user.prototype);
  
  return paidUserObj;
}

function ModeratorCreator(name, score, message) {
  var modObj = Object.create(moderatorFunc);

  modObj.prototype = userCreator(name, score);
  modObj.message = message;
  Object.setPrototypeOf(modObj, modObj.prototype);

  return modObj;
}

var paidUser1 = PaidUserCreator("Alyssa", 8, 25);

var paidUser2 = ModeratorCreator("Alyssa", 8, "Janhit mei jaari: Code all day");