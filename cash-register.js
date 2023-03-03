function checkCashRegister(price, cash, cidOriginal) {

  const cid = [];
  cidOriginal.forEach(denomNameAndAmt => {
    cid.push([denomNameAndAmt[0], parseFloat((denomNameAndAmt[1] * 100).toFixed(2))]);
  });
  
  let registerChangeDue = parseFloat(((cash - price) * 100).toFixed(2));
  
  if (registerChangeDue >= 0) {
    
    const coinDenoms = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000]; // Cents
    const changeInCoins = [];
    
    for (let i = coinDenoms.length - 1; i >= 0; i--) {
      if (registerChangeDue == 0) {
        break;
      }
      const coinDenom = coinDenoms[i];
      // const maxDenomAmt = Math.floor(registerChangeDue / coinDenom) * coinDenom;
      const maxDenomAmt = registerChangeDue - (registerChangeDue % coinDenom);
      const drawerNameAndAmt = cid[i];
      const actualDenomAmt = Math.min(maxDenomAmt, drawerNameAndAmt[1]);
      
      if (actualDenomAmt > 0) {
        drawerNameAndAmt[1] -= actualDenomAmt;
        registerChangeDue -= actualDenomAmt;
        changeInCoins.push([drawerNameAndAmt[0], parseFloat((actualDenomAmt / 100).toFixed(2))]);
      }
    }
    
    cid.forEach(denomNameAndAmt => {
      denomNameAndAmt[1] = parseFloat((denomNameAndAmt[1] / 100).toFixed(2));
    });

    const registerEmpty = cid.every(denomNameAndAmt => denomNameAndAmt[1] == 0);
    
    if (registerEmpty && registerChangeDue == 0) {
      return {status: "CLOSED", change: cidOriginal};
    } else if (registerChangeDue > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else {
      return {status: "OPEN", change: changeInCoins};
    }

  } else {
    return {status: "INSUFFICIENT_PAYMENT", change: []};
  }

}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));