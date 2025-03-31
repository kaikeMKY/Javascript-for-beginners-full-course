var ourDog ={
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  console.log(ourDog);
  var mydog ={
    "name": "doge",
    "legs": 4,
    "tails": 3,
    "friends": ["friendless"]//friend less
  };
  console.log(mydog);
  
  //
  var testObj= {
    "hat": "sugar cubes",
    "shirt": "pink hoddie",
    "pants": "skirt"
  };
  var hatValue = testObj.hat;
  var shirtValue = testObj.shirt;
  var pantsValue = testObj.pants;
var fullset = [hatValue, shirtValue, pantsValue];
console.log(fullset);  
  
  //
  var testObj = {
    "an entree":"hamburger",
    "my side":"veggies",
    "drink":"water"
  };
  var entreeValue = testObj["an entree"];
  var drinkValue = testObj["drink"];
  console.log(entreeValue);
  console.log(drinkValue);
  
  
  //
  var testObj = {
    12: "Nanamath",
    16: "Montana",
    19: "Unidas"
  };
  var playerNumber = 16;
  var player = testObj[playerNumber];
  console.log(player);
  
  //
  var mydog = {
    "name": "Inu",
    "legs": 4,
    "tails": 1,
    "friends": ["none"]
  };
  mydog['bark']='wolf!'
  //
  var mydog = {
    "name": "Inu",
    "legs": 4,
    "tails": 1,
    "friends": ["none"],
    "bark": "wolf!"
  };
  delete mydog.tails;//tailess
  console.log(mydog);
  
  //
  function phoneticLookup(val){
    var result = "";
    var lookup = {
      "alpha": "Adams",
      "bravo": "boston"
    };
    result=lookup[val];
    return result;
  }
  console.log(phoneticLookup("alpha"));
  
  
  //
  var myObj = {
    gift: "pony",
    pet: "dogo",
    bed: "sleigh"
  };
  function checkobj(checkprop){
    if (myObj.hasOwnProperty(checkprop)){
      return myObj[checkprop];
    } else {
      return "not Found"
    }
  }
  console.log(checkobj("gift"));
  