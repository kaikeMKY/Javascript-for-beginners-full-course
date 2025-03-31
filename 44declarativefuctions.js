const bicycle = {
    gear: 2,
    setGear(newGear){
      "use strict";
      this.gear = newGear;
    }
  };
  bicycle.setGear(3);
  console.log(bicycle.gear);
  
  //bad number fr 4 is bad but 44 is even worse