var myMusic=[
    {
      "artist": "A-one",
      "title": "temptSign",
      "formats": [ "digital","mp3"
      ],
      "tohoEuro": "true"
    },
  ]
  
  console.log(myMusic);
  //
  var Mystorage = {
    "car": {
      "inside": {
        "glovebox": "maps",
        "passagerseat": "crumbs"//blud dont clean his car
      },
      "outside": {
        "trunk":"jack"
      }
    }
  };
  var gloveboxcontents= Mystorage.car.inside["glovebox"];
  
  console.log(gloveboxcontents);
  
  
  //
  var myplants = [
    {
      type:"small",
      list: [
        "flower1",
        "flower2",
        "flower3"
      ]
    },
    {
    type: "momPlants",
    list: [ "bonsai"
      ]
    }
  ];
  var mymomplants = myplants[1].list[0];
  console.log(mymomplants)
  
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
  console.log(updateRecords(2222,"artist","littleV"));
  