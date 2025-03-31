function testlogicaland(val) {
    if (val <= 50 && val >= 25) {
      return "yes";
    }
    return "no";
  }
  console.log(testlogicaland(10));
  
  //
  function testlogicalor(val) {
    if (val < 10 || val > 20) {
      return "Outside";
    }
    return "insider";
  }
  console.log(testlogicalor(15));
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
  console.log(testelse(4));
  
  function testelseif(val) {
    if (val > 10) {
      return "greater than 10";
    } else if (val < 5) {
      return "smaller than 5";
    } else {
      return "between 5 and 10";
    }
  }
  console.log(testelseif(7));
  
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
  