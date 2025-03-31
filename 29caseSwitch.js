function caseInSwitch(val) {
    var answer = "";
    switch(val) {
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
  
  console.log(caseInSwitch(1));
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
    return answer;
  }
  console.log(chaintoswitch("the ice hero"))

  function isless(a,b){
    return a<b;
  }
  console.log(isless(9,1));//vai return false
  
  
  //
  function abTest (a,b){
  if (a<0 || b<0){
    return undefined;
  }
  
  
    return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));
  }
  console.log(abTest(2,2));
  
  
  
    