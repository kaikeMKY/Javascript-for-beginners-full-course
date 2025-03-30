//


//
function minusnine(num) {
  return num - 9;
}
console.log(
  minusnine(10)
); /* value should be one and works with basic math too num is from number is like an x in math can hold any value just isnt 
  defined yet */

//
var charged = 0;
function charged(num) {
  return (num + 5) / 3;
}
charged = charged(10); // 10 + 5 / 3

//adding item
function nextinline(arr, item) {
  arr.push("item");
  return arr.shift(); //return 1
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
console.log(testequal(10)); //not equal the == it says if val is 12 num or in string then equal

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
