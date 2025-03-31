function testgreaterthan(val) {
    if (val > 100) {return "over 100";
  } 
  if (val > 10) {
    return "10 or under";
  }
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
  