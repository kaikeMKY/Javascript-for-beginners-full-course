function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
   }
   console.log(checkSign(0));
   //
   let catname = "Quincy";
   let quote;
   catname = "beau";
   
   function cattalk() {
     "use strict";
     catname ="oliver";
     quote =catname + " says meow";
   }
   cattalk("uses strict");
   console.log(quote);
   
   
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
   console.log(checkscope());
   
   
    // 

function printmanytimes(srt) {
    "use strict";
    const SENTENCE = srt + " is cool!";
    for(let i=0; i <srt.length; i+=2){
      console.log(SENTENCE);
    }
  }
printmanytimes("touhou project");
  
  
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
    //Object.freeze(MATH_CONSTANTS);
    try{
      MATH_CONSTANTS.PI = 99;
    } catch(ex){
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeobj();
  console.log(PI);
  
  