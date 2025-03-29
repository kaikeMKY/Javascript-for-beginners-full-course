/* js is already on the device mostly. theres no such thing as "how i install javascript" */
console.log("hello World");



//this is a comment just last on this line

/* this is also a comment but now can last long 
as the * / be in */



/* data types 
(undefined, null, boolean, string, symbol, number, and object)

undefined is not have any value defined and is NOT same as null

null is nothing

boolean is true or false

string is a text and a number is a number 

object can store a lot different key value pairs

symbol is a primitive value that immutable meaning that cannot change value and is unique 

variable is like a box that contain the data you put there can be a number or even a yukkuri plushie lol but i prefer a fumo plushie tho

var is used to mean variable and is used to create a variable*/


//
var myname = "nome"; // declare the string variable

myname = "0";//now myname is now 0 but could be a number or any data if i want to change

const pie =3.14; //a const is inmutable the only way to change is by changing the value on the const here


//var or variables can be a number,a string, null,
var test ="value"; //the value of a variable can be easely changed 
test = 1; //test is now a number not a string anymore
//the variables can be changed


var test; //we declare test
console.log(test); //test is null hold nothing
var teste = 9; // we declare Teste and assign an value
test = 1; //we assign test
test = teste; //now teste has the same contain of test
console.log(test); //i should show me some value but im on the vs code so idk that a shame


//initializing
var a = 9;
//unitializing variable
var a = 1;
var b = 2;
var c = "ha";
a += 9;
b += 5;
c += "lf";
// letras capitalizadas importam
// ex: test é diferente de Test tem que ser igual


// //basic math +, -, *, /. mais, menos, vezes, dividido.
var cal = 1 + 1 - (1 * 1) / 1; //calcula
console.log(cal); // resultado é 1
//+1
cal++; //adiciona 1
cal--; //diminui 1

// decimals
var decimal = 1.9; //basic math is same here

//double quotes
var doubleQuote = 'I am"double"quote'; //OR
doubleQuote = 'quote"quote"quote';


//math with string
var MyName = "name";
var phase2 = "im" + MyName + "ok"; //im not name ok?
//
var phase = "ha";
phase += "lf"; //then will be "half"
//
var adjetivo = "Silly";
adjetivo += MyName; // Silly name :D
//
var letra1;
letra1 = MyName[0]; //n of name start in 0 instend of 1
//
var ultimaLetra;
ultimaLetra = MyName[MyName.length - 1]; //o pega tamanho da palavra e -1 é a ultima letra

function phrases(Teste, Test, MyName) {
    var result = "halo i am" + Teste + " and " + test + " " + MyName;
      return result;
    }
    //
    var array = [0, 1, 2, 3]; // começa pelo 0
    var arrays = ["value1", ["value2"], "value3"];
    var produto = arrays[0]; // 1
    
    arrays[2] = "value4"; // now is value 4 not value 3
    
    arrays.push(["value5", "value6"]); //now add value 5and6 in the end

    var kill = arrays.pop(); //should steal value5and6
    var thief = arrays.shift(); //shoul steal value1 and put in var thief steals the first
    var substutite = arrays.unshift("value7"); // adds in the start
    //
    
    var grandArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    var result = grandArray[2][1]; // deve ser 8
    
    
    var listaDeCompras = [
      [banana, 1],
      [tangerina, 9],
      [chá, 1],
    ]; // list

    
    //
    function myreusableFunctionl() {
      console.log("hello");
    }
    myreusableFunctionl;
    myreusableFunctionl;
    myreusableFunctionl; //should be hello hello hello
    
    function myreusableFunctionl() {
      console.log("there");
    }//funções podem ser reutilizadas
    myreusableFunctionl; //should be hello hello there
  
    
  //
function args(a, b) {
  console.log(a - b);
  }
  args(10, 5); //result be 5 a=10 b=5 pega a-b do console.log e define o valor no ()
  

  //global
  var myfav = "tangerine";
  function myfav() {
    var theirfav = "apple";
    return theirfav;
  }
  console.log(myfav()); //valor dentro da função myfav
  console.log(theirfav); //vaalor global theirfav


  //
  function minusnine(num) {
    return num - 9;
  }
  console.log(minusnine(10)); // value should be one and works with basic math too

  
  //
  var charged = 0;
  function charged(num) {
    return (num + 5) / 3;
  }
  charged = charged(10); // 10 + 5 / 3
  
  
  //adding item
  function nextinline(arr, item) {
    arr.push("item");
    return arr.shift();//return 1
  }
  var testarr = [1, 2, 3, 4, 5];
  console.log("Before: " + JSON.stringify(testarr));
  console.log(nextinline(testarr, 6));
  console.log("After: " + JSON.stringify(testarr));

  //true or false
  function TOF() {
    return true;
  }
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


  //