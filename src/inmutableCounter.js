/**
 * Inmutable methods must not change or modify the entry params; 
 * @param {*} list 
 */
console.log('Star Wars Team, needs your help, the force require a soldiers counter manager');
var deepFreeze = require('deep-freeze');
var expect = require('expect');
/**
 * Adds a  counter to the list
 * @param {*} list 
 */
const addCounter = (list) => {
  var arr =  [];
  for (var a=0; a<list.length;a++){
    arr.push(list[a])
  }
  arr.push(list.length);
  return arr;
};

/*
* Removes a  counter from the list
* @param {*R} list 
*/
const removeCounter = (list, index) => {
  var arr =  [];
  for (var a=0; a<list.length;a++){
      if(index != a){
          arr.push(list[a])
      }
  }
  return arr;
};

/**
 * Increment the counter 
 * @param {*} list 
 * @param {*} index 
 */
const incrementCounter = (list, index) => {
    var arr =  [];
    for (var a=0; a<list.length;a++){
        if(index == a){
            arr.push(list[a]+1)
        }else{
            arr.push(list[a])
        }
    }
    return arr;
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