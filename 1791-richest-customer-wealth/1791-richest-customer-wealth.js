/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {

    Maxvalue = 0;

    for(let i=0 ; i < accounts.length;i++){
      Currentvalue = 0

      for(let j = 0 ; j < accounts[i].length ; j++){
        Currentvalue += accounts[i][j]
      }
      if (Currentvalue > Maxvalue){
        Maxvalue = Currentvalue
      }
    }
    return Maxvalue
};