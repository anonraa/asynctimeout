/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @category Function
 * @param {Function} handler The function to exacute inside setTimeout function
 * @param {number} timeout Number of milisecunds to wait before execution. 1 is default value
 * @returns {Function} Returns the new restricted function.
 * @example
 * 
 *
 */


function asyncTimeout(handler, timeout = 1) {
  return new Promise(resolve => setTimeout(() => resolve(handler), timeout))
}

export default asyncTimeout