var magic = ()=> new Date();


//
const myconcat =(arr1,arr2)=> arr1.concat(arr2);
console.log(myconcat([1,2],[3,4,5]));


//
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squarelist = (arr) => {
  const squaredIntergers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntergers;
};
const squaredintergers = squarelist (realNumberArray);
console.log(squaredintergers);