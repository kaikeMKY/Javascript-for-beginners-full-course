function compareEquality(a, b) {
    if (a === b) {
      return "equal";
    }
    return "not equal";
  }
  console.log(compareEquality(10, "10")); // not equal because first is a number and second is a string
  
  function testnotequal(val) {
    if (val != 99) {
      // see if the value is not 99
      return "not equal";
    }
    return "equal";
  }
  console.log(testnotequal(10));

  function testStrictnotequal(val) {
    if (val !== 17) {
      return "not equal";
    }
    return "equal";
  }
  console.log(testStrictnotequal("17"));//if is in string is not equal
  
  
  