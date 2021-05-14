// Code your solution here

function findMatching(drivers, text){
  let newArray = [];
  newArray = drivers.filter(driver=>driver.toLowerCase()==text.toLowerCase());
  return newArray;
}

function fuzzyMatch (drivers, text){
  let newArray = [];
<<<<<<< HEAD
  newArray = drivers.filter(driver=>text.includes(driver[0]));
  return newArray;
}

function matchName (drivers, text){
  let newArray = [];
  newArray = drivers.filter(driver=>driver.name==text);
=======
  newArray = drivers.filter(driver=>text.includes(driver.split("")));
  return newArray;
}

function findMatching(drivers, text){
  let newArray = [];
  newArray = drivers.filter(driver=>driver.toLowerCase()==text.toLowerCase());
>>>>>>> 92774c98299f37e3d91617f2fa9b87b469b7faa6
  return newArray;
}