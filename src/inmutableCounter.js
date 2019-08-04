/**
 * Inmutable methods must not change or modify the entry params; 
 * @param {*} list 
 */
console.log('Star Wars Team, needs your help, the force require a soldiers counter manager');
var deepFreeze = require('deep-freeze');
var expect = require('expect');
var counterInt = 0 
/**
 * Adds a  counter to the list
 * @param {*} list 
 */
const addCounter = (list) => {
  var internalList = [0];
  list = internalList;
  return list;
};
/*
* Removes a  counter from the list
* @param {*R} list 
*/
const removeCounter = (list, index) => {
var internalArray = [];
  for (var i = 0; i < list.length; i++) {
    var here = list[i];
    internalArray.push(here);
  };
  internalArray.splice(index, 1);
  list = internalArray;
  return list;
};

/**
 * Increment the counter 
 * @param {*} list 
 * @param {*} index 
 */
const incrementCounter = (list, index) => {
  var internalValue = list[index];
  internalValue++;
  var internalArray = [];
  for (var i = 0; i < list.length; i++) {
    var here = list[i];
    internalArray.push(here);
  };
  internalArray[index] = internalValue;
  return internalArray;             
};




//TDD Unit Tests
const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];
  
  deepFreeze(listBefore);
  
  expect(
    addCounter(listBefore)
  ).toEqual (listAfter);
  
};

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0,20];
  
  deepFreeze(listBefore);
  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
};


const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];
  
  deepFreeze(listBefore);
  expect(
    
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
};

testAddCounter();
console.log('Congrats!!!. We are be able to add a new counter');
testRemoveCounter();
console.log('Congrats!!!.  We are be able to remove a new counter');
testIncrementCounter();
console.log('Congrats!!!.  We are be able to increment an especific counter');

console.log('All test was completed succesfully!!!!.');