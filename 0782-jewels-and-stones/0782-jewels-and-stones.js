/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
function numJewelsInStones(jewels, stones) {
  let count = 0

  for(let items of stones){
    if(jewels.includes(items)){
        count++
    }
  }
  return count
}
