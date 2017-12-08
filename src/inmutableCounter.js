
console.log('Star Wars Team, needs your help, the force require a soldiers counter manager');
var deepFreeze = require('deep-freeze');
var expect = require('expect');
/**
 * Adds a  counter array
 * @param {*} list 
 */
const addCounter = (list) => {
  return list;
};
/*
* Removes a  counter array
* @param {*R} list 
*/
const removeCounter = (list, index) => {
  return list;
};

/**
 * Increment the counter
 * @param {*} list 
 * @param {*} index 
 */
const incrementCounter = (list, index) => {
  return list;             
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