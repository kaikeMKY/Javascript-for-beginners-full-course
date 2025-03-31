//adding item
function nextinline(arr, item) {
    arr.push(item);
    return arr.shift(); //return 1
  }
  var testarr = [1, 2, 3, 4, 5];
  console.log("Before: " + JSON.stringify(testarr));
  console.log(nextinline(testarr, 6));
  console.log("After: " + JSON.stringify(testarr));
  