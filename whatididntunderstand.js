var names = [
    "hole-in-one!",
    "eagle",
    "birdie",
    "par",
    "bogey",
    "double bogey",
    "go home!",
  ];
  function golfscore(par, strokes) {
    if (strokes == 1) {
      return names[0];
    } else if (strokes <= par - 2) {
      return names[1];
    } else if (strokes == par - 1) {
      return names[2];
    } else if (strokes == par) {
      return names[3];
    } else if (strokes == par + 1) {
      return names[4];
    } else if (strokes == par + 2) {
      return names[5];
    } else if (strokes >= par + 3) {
      return names[6];
    }
    return "change me";
  }
  console.log(golfscore(5, 3));

  //
function abTest (a,b){
    if (a<0 || b<0){
      return undefined;
    }
    
    
      return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));
    }
    console.log(abTest(2,2));
    //
var collection ={
    "1919": {
      "album": "",
      "artist": "",
      "tracks": [
        "",
        ""
      ]
    },
    "2222": {
      "album": "",
      "artist": "littleV",
      "tracks": [
        "",
        ""
      ]
    },
    "0001": {
      "album": "",
      "artist": "",
      "tracks": [
        "",
        ""
      ]
    },
  };
  var collectioncopy= JSON.parse(JSON.stringify(collection));
  
  function updateRecords(id,prop,value) {
    if (value ===""){
      delete collection[id][prop];
    }else if (prop=== "tracks"){
      collection[id][prop] =collection[id][prop] || [];
      collection[id][prop].push(value);
    }else {
      collection[id][prop]=value;
    }
  
    return collection;
  }
  updateRecords( 1919,"tracks","test");
  console.log(updateRecords(2222,"artist",littleV));
  
  