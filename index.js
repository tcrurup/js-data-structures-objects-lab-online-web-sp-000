// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(obj, key, value){
  const newObject = { ...obj };
  newObject[key] = value;
  return newObject;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value;
}