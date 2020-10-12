/**
 * 
 * Given a 32-bit signed integer, reverse digits of an integer.

Note:
Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

 

Example 1:

Input: x = 123
Output: 321

 *  
 */


/**
 * @param {number} x
 * @return {number}
 */
var reverse = (x) => {
    let result = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x);
    if (Math.sign(x) == -1) {
        return result < (Math.pow(2, 31) - 1) * Math.sign(x) ? 0 : result;
    } else {
        return result > (Math.pow(2, 31) - 1) * Math.sign(x) ? 0 : result;
    }



}