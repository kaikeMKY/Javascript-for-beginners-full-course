var array = [0, 1, 2, 3]; // começa pelo 0
var arrays = ["value1", ["value2"], "value3"];
console.log(arrays);

var produto = arrays[0]; // 1
console.log(produto);

arrays[2] = "value4"; // now is value 4 not 3

console.log(arrays);

arrays.push(["value5", "value6"]); //now add value 5and6 in the end

console.log(arrays);

var kill = arrays.pop(); //should steal value5and6
console.log(arrays);

var thief = arrays.shift(); //shoul steal value1 and put in var thief steals the first
console.log(arrays);
console.log(thief);
 
var substutite = arrays.unshift("value7"); // adds in the start
console.log(arrays);