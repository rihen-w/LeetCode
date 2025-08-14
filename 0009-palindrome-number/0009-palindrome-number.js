/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   
    let xstr = x.toString()
       
    let result = xstr.split("").reverse().join("")

      return xstr === result
};
console.log(isPalindrome(121))
