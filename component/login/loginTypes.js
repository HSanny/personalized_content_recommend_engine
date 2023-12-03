/*
   Actions are like events in redux. They can be triggered in the form
   of mouse clicks, key presses, timers or network requests. The nature 
   of each event mentioned is mutable. An action is a JavaScript object.

   To define an action, there is 1 requirement: each action must have its
   own type property.

*/

const SUBMIT_INFO = 'SUBMIT_INFO';
const LOGIN = 'LOGIN'

export { SUBMIT_INFO, LOGIN }