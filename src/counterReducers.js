var deepFreeze = require('deep-freeze');
var expect = require('expect');
/**
 * Counter reducer  method
 * @param {*} state 
 * @param {*} action 
 */
const counter = (state = 0, action) => {
   return state
}

//Unit Tests
//state init in 0
// increments the state
expect(
    counter(0, {type: 'INCREMENT'})
).toEqual(1);
// increments the state
expect(
    counter(1, {type: 'INCREMENT'})
).toEqual(2);
// decrements the state
expect(
    counter(2, {type: 'DECREMENT'})
).toEqual(1);

// decrements the state
expect(
    counter(1, {type: 'DECREMENT'})
).toEqual(0);
// 
expect(
    counter(1, {type: 'SOMETING_ELSE'})
).toEqual(1);

console.log('All test Passed');