/**
 * nTimes takes an integer and a function, and returns a function that will invoke the
 * original function the first n times the new function is invoked. The nth + 1 invocation
 * (and all subsequent invocation) of the new function will return the result of
 * the last func invocation. The new function should invoke func with any arguments
 * passed to the new function.
 *
 * HINT: n-times is the generalized version of once - for example,
 * passing 1 into n-times is the equivalent of the once function.
 *
 * var add = function(a/**
 * nTimes takes an integer and a function, and returns a function that will invoke the
 * original function the first n times the new function is invoked. The nth + 1 invocation
 * (and all subsequent invocation) of the new function will return the result of
 * the last func invocation. The new function should invoke func with any arguments
 * passed to the new function.
 *
 * HINT: n-times is the generalized version of once - for example,
 * passing 1 into n-times is the equivalent of the once function.
 *
 * var add = function(a, b) {
 *   return a + b;
 * }
 *
 * var add3Times = nTimes(3, add);
 * add3Times(1, 5) // returns 6
 * add3Times(4, 9) // returns 13
 * add3Times(6, 5) // returns 11
 * add3Times(2, 3) // returns 11
 * add3Times(9, 8) // returns 11
 *
var multiply4times = nTimes(4, mult);



 */

var nTimes = function(n, func) {
//n is the amount of times it will run, until it fails. 

 //  var newFunc = function(a, b)
 //  {
	// return a + b;
 //  }
//   var numberInN = n;
//   for(var i = numberInN + 1; i>0; i-- ) // What: is this doing?
//   								//Doing: creating the nTh timed allowed to fail
//   {
// var addTotal = newFunc(func)
// console.log(addTotal[i]);
	var newFunc = function(n, func){
		//do func n times
	}

  //}
  return newFunc;
};
/*

get program to Nth time fail!!

f
//input: number and function 

//math: // // * var add3Times = nTimes(3, add);
   // * var add = function(a, b) {
 		// *   return a + b;
 		// * }
 		// *

//output: number

add3times = ntimes(3, add(1,5))





 // * add3Times(1, 5) // returns 6
 // * add3Times(4, 9) // returns 13
 // * add3Times(6, 5) // returns 11
 // * add3Times(2, 3) // returns 11
 // * add3Times(9, 8) // returns 11

 */, b) {
 *   return a + b;
 * }
 *
 * var add3Times = nTimes(3, add);
 * add3Times(1, 5) // returns 6
 * add3Times(4, 9) // returns 13
 * add3Times(6, 5) // returns 11
 * add3Times(2, 3) // returns 11
 * add3Times(9, 8) // returns 11
 *
var multiply4times = nTimes(4, mult);



 */

var nTimes = function(n, func) {
//n is the amount of times it will run, until it fails. 

 //  var newFunc = function(a, b)
 //  {
	// return a + b;
 //  }
//   var numberInN = n;
//   for(var i = numberInN + 1; i>0; i-- ) // What: is this doing?
//   								//Doing: creating the nTh timed allowed to fail
//   {
// var addTotal = newFunc(func)
// console.log(addTotal[i]);
	var newFunc = function(n, func){
		//do func n times
	}

  //}
  return newFunc;
};
/*

get program to Nth time fail!!

f
//input: number and function 

//math: // // * var add3Times = nTimes(3, add);
   // * var add = function(a, b) {
 		// *   return a + b;
 		// * }
 		// *

//output: number

add3times = ntimes(3, add(1,5))





 // * add3Times(1, 5) // returns 6
 // * add3Times(4, 9) // returns 13
 // * add3Times(6, 5) // returns 11
 // * add3Times(2, 3) // returns 11
 // * add3Times(9, 8) // returns 11

 */