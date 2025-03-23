function phrases(myFumo, myYukkuri, MyName) {
  var result = "halo i am" + myFumo + " and she" + myYukkuri + " " + MyName;
  return result;
} //halo i am cirno and she marisa baka it should be it

var array = [0, 1, 2, 3]; // começa pelo 0
var arrays = ["baka", ["cirno"], "bocchi"];
var produto = arrays[0]; // should be baka

arrays[2] = reimu; // now instend of bocchi is now reimu desu

var grandeArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var resultante = grandeArray[2][1]; // deve ser 8

arrays.push(["marisa", "sakuya"]); // the arrays should be ["baka",["cirno"],"reimu",["marisa,""sakuya"]]; desune

var thief = arrays.pop(); //should steal marisa,sakuya array i hope so onegashimasu

var strongest = arrays.shift(); //shoul steal cirno and put in var strongest sempre a primeira string do array
var substutite = arrays.unshift("eirin"); // adiciona no inicio

var compras = [
  [banana, 1],
  [tangerina, 9],
  [chá, 1],
]; // list

function myreusableFunctionl() {
  console.log("fumo");
}
myreusableFunctionl;
myreusableFunctionl;
myreusableFunctionl; //should be fumo fumo fumo

function myreusableFunctionl() {
  console.log("plushie");
}
myreusableFunctionl; //should be fumo fumo fumo plushie
function args(a, b) {
  console.log(a - b);
}
args(10, 5); //result be 5 a=10 b=5

//global
var theirfav = "reimu";
function myfav() {
  var theirfav = "cirno";
  return theirfav;
}
console.log(myfav()); //valor dentro da função cirno
console.log(theirfav); //vaalor global reimu

function minusnine(num) {
  return num - 9;
}
console.log(minusnine(10)); // value should be one and works with basic math too

//
var charged = 0;
function charged(num) {
  return (num + 5) / 3;
}
charged = change(10); // 10 + 5 / 3
//adding item
function nextinline(arr, item) {
  arr.push("item");
  return arr.shift();
}

var testarr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testarr));
console.log(nextinline(testarr, 6));
console.log("After: " + JSON.stringify(testarr));
//true or false
function TOF() {
  return true;
}
//Is it true or is it false
function trueorfalse(isIttrue) {
  if (isIttrue) {
    return "true";
  }
  return "false";
}
console.log(trueorfalse(true));
//equal
function testequal(val) {
  if (val == 12) {
    return "equal";
  }
  return "not equal";
}
console.log(testequal(10)); //not equal

//
function testStrict(val) {
  if (val) {
    return "Equal";
  }
  return "not equal";
}
testStrict(10);
//
function compareEquality(a, b) {
  if (a === b) {
    return "equal";
  }
  return "equal";
}
console.log(compareEquality(10, "10")); // not equal because first is a number and second is a string

//
function testnotequal(val) {
  if (val != 99) {
    // see if the value is not 99
    return "not equal";
  }
  return "equal";
}
console.log(testnotequal(10));
//
function testStrictnotequal(val) {
  if (val !== 17) {
    return "not equal";
  }
  return "equal";
}
console.log(testStrictnotequal(10));
//
function testgreaterthan(val) {
  if (val > 100) return "over 100";
}
if (val > 10) {
  return "10 or under";
}
console.log(testgreaterthan(10));
//
function testgreaterorequal(val) {
  if (val >= 20) {
    return "20 or over";
  }

  if (val >= 10) {
    return "10 or over";
  }
  return "less than 10";
}
console.log(testgreaterorequal(10));
//
function testlessthan(val) {
  if (val < 25) {
    return "Under 25";
  }
  if (val < 55) {
    return "Under55";
  }
  return "55 or Over";
}
console.log(testlessthan(10));

//
function testlessthaorequal(val) {
  if (val <= 12) {
    return "smaller than or equal to 12";
  }
  if (val <= 24) {
    return "smaller than or equal to 24";
  }
  return "more than 24";
}
console.log(testlessthaorequal(10));

//
function testlogicaland(val) {
  if (val <= 50 && val >= 25) {
    return "yes";
  }
  return "no";
}
testlogicaland(10);
//
function testlogicalor(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "insider";
}
testlogicalor(15);
//else
function testelse(val) {
  var result = "";
  if (val > 5) {
    result = "bigger than 5";
  } else {
    result = "5 or smaller";
  }
  return result;
}
testelse(4);

function testelseif(val) {
  if (val > 10) {
    return "greater than 10";
  } else if (val < 5) {
    return "smaller than 5";
  } else {
    return "between 5 and 10";
  }
}
testelseif(7);
//
function ordermylogic(val) {
  if (val < 5) {
    return "less than 5";
  } else if (val < 10) {
    return "less than 10";
  } else {
    return "greater than or equal10";
  }
}
console.log(ordermylogic(3));
//
function testsize(num) {
  if (num < 5) {
    return "tiny";
  } else if (num < 10) {
    return "small";
  } else if (num < 15) {
    return "medium";
  } else if (num < 20) {
    return "large";
  } else if (num >= 20) {
    return "huge";
  }
}
console.log(testsize(7));
//golf game
var names = [
  "hole-in-one!",
  "eagle",
  "birdie",
  "par",
  "bogey",
  "double bogey",
  "go home!",
];
function golfscore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
  return "change me";
}
console.log(golfscore(5, 3));
//switch stantements
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  return answer;
}
caseInSwitch(1);
//
function switchwithstuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;
}
console.log(switchwithstuff("a"));
//
function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "low";//sober
      break;
    case 4:
    case 5:
    case 6:
      answer = "mid";//drunk
      break;
    case 7:
    case 8:
    case 9:
      answer = "high";//high
      break;
  }
  return answer;
}
console.log(sequentialSizes(1));
//
function chaintoswitch(val) {
  var answer = "";
  switch(val) {
    case "reimu":
      answer="hakurei";
      break;
      case "marisa":
      answer="kirisame";
      break;
      case "the ice hero":
      answer="cirno";
      break;
  }
}
//
function isless(a,b){
  return a<b;
}
console.log(isless(9,1));
//
function abTest (a,b){
if (a<0 || b<0){
  return undefined;
}


  return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));
}
console.log(abTest(2,2));
//
var count=0;
function cc(card){
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  var holdbet = ' Hold '
  if (count > 0) {
    holdbet = 'Bet'
  }
  return count + " " holdbet;
}
cc(2); cc('K'); cc(7); cc('K'); cc('A'); 
console.log(cc(4))
//
var ourDog ={
  "name": "camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

var mydog ={
  "name": "doge",
  "legs": 4,
  "tails": 1,
  "friends": [""]
  
};
//
var testObj= {
  "hat": "sugar cubes",
  "shirt": "pink hoddie",
  "pants": "skirt"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
var pantsValue = testObj.pants;
//
var testObj = {
  "an entree":"hamburger",
  "my side":"veggies",
  "drink":"water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj["drink"];
//
var testObj = {
  12: "Nanamath",
  16: "Montana",
  19: "Unidas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
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
delete mydog.tails;
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
var myObj= {
  gift: "pony",
  pet: "dogo",
  bed: "sleigh"
};
function checkobj (checkprop){
  if (myObj.hasOwnPropety(checkprop)){
    return myObj[checkprop];
  }else {
    return "not Found"
  }
}
console.log(checkobj("gift"));
//
var myMusic=[
  {
    "artist": "A-one",
    "title": "temptSign",
    "formats": [ "digital","mp3"
    ],
    "tohoEuro": "true"
  },
]
//
var Mystorage = {
  "car": {
    "inside": {
      "glovebox": "maps",
      "passagerseat": "crumbs"//blud dont clean his car
    },
    "outside": {
      "trunk":"jack"
    }
  }
};
var gloveboxcontents= Mystorage.car.inside["glovebox"];

console.log(gloveboxcontents)

//
var myplants = [
  {
    type:"myPlants",
    list: [
      "weed",
      "zaza",
      "bonsai"
    ]
  },
  {
  type: "momPlants",
  list: [ "none"//LOL
    ]
  }
];
var mymomplants = myplants[1].list[0];
//
var collection ={
  "1919": {
    "album": "",
    "artist": "",
    "tracks": [
      "",
      ""
    ]
  },
  "2222": {
    "album": "",
    "artist": "littleV",
    "tracks": [
      "",
      ""
    ]
  },
  "0001": {
    "album": "",
    "artist": "",
    "tracks": [
      "",
      ""
    ]
  },
};
var collectioncopy= JSON.parse(JSON.stringify(collection));

function updateRecords(id,prop,value) {
  if (value ===""){
    delete collection[id][prop];
  }else if (prop=== "tracks"){
    collection[id][prop] =collection[id][prop] || [];
    collection[id][prop].push(value);
  }else {
    collection[id][prop]=value;
  }

  return collection;
}
updateRecords( 1919,"tracks","test");
console.log(updateRecords(2222,"artist",littleV));
//
var myArray = [];
var i =0;
while(i<5) {
  myArray.push(i);
  i++;
}
console.log(myArray);
//