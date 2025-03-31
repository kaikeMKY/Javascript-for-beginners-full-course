//
var myArray = [];
var i =0;//initialization
//condition
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

do{
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
  for(var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name){
      return contacts[i][prop]||"no such property";
    }
  }
  return "No such contact";
}
var data = lookupprofile("henrique","lastName");

console.log(data);

