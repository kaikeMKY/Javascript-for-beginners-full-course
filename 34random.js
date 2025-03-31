function randomFraction(){
    return Math.random();
  }
  console.log(randomFraction());
  
  
  //
  var randomnumberbetween0and19 = Math.floor(Math.random()*20);
  function randomwholenum () {
    return Math.floor(Math.random()*10);
  }
  console.log(randomwholenum());
  
  
  //
  function randomrange(mymin,mymax) {
    return Math.floor(Math.random()* (mymax-mymin+1))+ mymin;
  
  }
  var myrandom=randomrange(5,15);
  console.log(myrandom);
  
  