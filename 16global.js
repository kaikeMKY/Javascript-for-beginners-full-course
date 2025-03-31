
//global
var myGlobal = 10;
function fun1() {
oopsGlobal = 5;
}
function fun2(){
  var output= "";
  if (typeof myGlobal != "undefined"){
    output += "myglobal: " + myGlobal;
  } if  (typeof oopsGlobal!= "undefined"){
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();
// dont work
