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
var myArray = [];
for (var i= 1; i<6; i++){
  myArray.push(i);
}
console.log(myArray);
//
var myArray = [];
for (var i =1; i<10;i+=2) {
  myArray.push(i);
}
console.log(myArray);
//
var myArray = [];
for (var i = 9; i>0; i-=2) {
  myArray.push(i);
}
console.log(myArray);
//
var myArr = [2,3,4,5,6];
var total =0;
for (var i = 0; i < myArr.length; i++) {
   total+=myArr[i];
}
console.log(total);
//
function multiplyall(arr) {

  var product= 1;
  for (var i =0; i < arr.length; i++) {
     for (var j=0; j < arr[i].length; j++)
      product*=arr[i][j];
  }
  return product;
}
 var product = multiplyall([[1,2],[3,4],[5,6,7]]);
 console.log(product);
 
//
var myArray= [];
var i  = 10;

while(i<5){
  myArray.push(i);
  i++;
} while (i<5)
console.log(i,myArray);
//
var contacts = [
  {
    "firstName":"kaike",
    "lastName":"Yamashita",
    "Number":"123456789",
    "likes":["touhou","japanese","music"],
  },
  {
    "firstName":"henrique",
    "lastName":"Yamashita",
    "Number":"098765432",
    "likes":["football","gaming","music"],
  },
  {
    "firstName":"somebody",
    "lastName":"somelastname",
    "Number":"181919100",
    "likes":["food","football","music"],
  },
];
function lookupprofile(name,prop){
  for(var i =0; i < contacts.length; i++) {
    if (contacts[i].firstName===name){
      return contacts[i][prop]||"no such property";
    }
  }
  return "No such contact";
}
var data = lookupprofile("henrique,lastname");

console.log(data);
//
function randomFraction(){
  return Math.random();
}
console.log(randomFraction());
//
var randomnumberbetween0and19 = Math.floor(Math.random()*20);
function randomwholenum () {
  return Math.floor(Math.random()*10);
}
console.log(randomwholenum());
//
function randomrange(mymin,mymax) {
  return Math.floor(math.random()* (mymax-mymin+1))+ mymin;

}
var myrandom=randomrange(5,15);
console.log(myrandom)
//
function converttointerger(str){
   return parseInt(srt);
}
converttointerger("56");
//
function converttointerger(str){
  return parseint (str,2)
}
converttointerger("10011");
//temary
function checkequal (a,b) {
  return a===b ? true : false;

  return a === b;
}
checkequal(1,2);

//
function checkSign(num) {
 return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(0));
let catname = "Quincy";
let quote;
catname = "beau";

function cattalk() {
  "use strict";
  catname ="oliver";
  quote =catname + "says meow";
}
cattalk();
//
function checkscope (){
  "use strict";
  let i = "function scope";
  if (true){
    let i = "block scope";
    console.log("block scope i is:",i);
  }
  console.log("function scope i is: ",);
  return i;
}
checkscope();
//
function printmanytimes(str) {
  "use strict";
  const SENTENCE = str + "is cool!";
  for(let i=0; i <str.lenght; i+=2){
    console.log(SENTENCE);
  }
}
printmanytimes("freecodecamp");
//
const s = [5,7,2];
function editinplace(){
  "use strict";
  //s = [2,5,7];
  s[0]=2;
  s[1]=5;
  s[2]=7;
}
editinplace();
console.log(s)
//
function freezeobj(){
  "use strict";
  const MATH_CONSTANTS = {
    PI:3.14
  };
  Object.freeze(MATH_CONSTANTS);
  try{
    MATH_CONSTANTS.PI = 99;
  } catch(ex){
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeobj();
//
var magic = ()=> new Date();
//
const myconcat =(arr1,arr2)=> arr1.concat(arr2);
console.log(myconcat([1,2],[3,4,5]));
//
const realNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];
const squarelist =(arry) => {
  const squarelnterger = arr.filter(num=> Number.isInteger(num) && num >0).map(x => x*x);
  return squaredintergers;
};
const squaredintergers =squarelist(realNumberArray);
console.log(squaredintergers);
//
const increment = (function(){
  return function increment(number,value = 1  ) {
    return number + value;
  };
})();
console.log(increment(5,2));
console.log(increment(5));
//
const sum =(function(){
 return function sum (...args){
  return args.reduce((a,b) => a+b,0);
 };
})();
console.log(sum(1,2,3,4));
//
const arr1 =['JAN','FEB','MAR','APR','MAY'];
let arr2;
(function(){
  arr2 = [...arr1];
  arr1[0]='potato'
})();
console.log(arr2);
//
var voxel =  {x:3.6, y:7.4, z:6.54};
var x =voxel.x;
var y =voxel.y;
var z =voxel.z;
const {x : a, y : b, z : c} =voxel;
const AVG_TEMPERATURES ={
  today: 77.5,
  tomorrow:79
};
function getTempOfTmrw(avgTempetatures) {
  "use strict";
  const { tomorrow : tempOfTomorrow } = avgTempetatures;
   return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));
//
const LOCAL_FORECAST = {
  today: { min: 72, max:83},
  tomorrow:{min:73.3, max:84.6}
};
function getmaxoftmrw(forecast){
  "use strict";
  const {tomorrow = {max:maxoftomorrow}} = forecast;
  return maxoftomorrow;
}
console.log(getmaxoftmrw(LOCAL_FORECAST));
//
const [z,x, ,y]= [1,2,3,4,5,6];
console.log(z,x,y);
let a = 8, b = 6;
(() => {
  "use strict";
  [a,b]=[b,a]
})();
console.log(a);
console.log(b);
//
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
  const[ , , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source)
//
const stats = {
  max:56.78,
  standard_deviation:4.34,
  median:34.54,
  mode:23.87,
  min:-0.75,
  average:35.85
};
const half = (function(){
  return function half({max,min}){
    return(max +min)/2.0;
  };

})(); 
console.log(stats);
console.log(half(stats));
//
const person = {
  name: "Zodiac Hasbro",
  age:56
};
const greetings = 'Hello my name is ${person.name}!I am ${person.age}years old';
console.log(greetings);
const result = {
  success: ["max-length","no-amd","prefer-arrow-functions"],
  failure: ["no-var","var-on-top","linebreak"],
  skipped: ["id-blacklist","no-dup-keys"]
};
function makeList(arr){
  const resultDisplayArray =[];
  for(let i = 0; i < arr.lenght; i++){
    resultDisplayArray.push('<li class="text-warning">${arr[i]}</li')
  }
  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray)
//
const createperson = (name,age,gender)=> ({name,age,gender});
console.log(createPerson("Zodiac Hasbro",56,"male"));
//
const bicycle = {
  gear: 2,
  setGear(newGear){
    "use strict";
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);
//
class SpaceShuttle {
  constructor(targetPlanet){
  this.targetPlanet = targetPlanet;
}
}
var zeus = new SpaceShuttle('jupiter');
console.log(zeus.targetPlanet)

function makeClass() {
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);
//
class book{
  constructor(author){
    this._author = author;
  }
  getwriter(){
    return this._author;
  }
  set writer(updateAuthor){
    this._author = updatedAuthor;
  }
}
function makeClass(){
  return Thermostat{
    constructor(temp);{
      this._temp = 5/9 *(temp-32);
    }
    get tempetature(){
      return this.temp;
    }
    set tempetature(updateTemp){
    this._temp = updateTemp;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.tempetature;
thermos.tempetature=26;
temp = thermos.tempetature;
console.log(temp);
//
