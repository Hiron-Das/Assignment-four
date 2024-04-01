// ----Problem number : 01 --------
function calculateMoney(numbers) {
  if (numbers < 0) {
    return "Invalid Number";
  }
  const perPieceTicket = 120;
  const ticketSoldToday = numbers;
  const totalIncomeOfTicket = perPieceTicket * ticketSoldToday;
  const careTakerCost = 500;
  const stuffNum = 8;
  const perStufflunchCOst = 50;
  const totalLunchCost = stuffNum * perStufflunchCOst;
  const totalExpenses = careTakerCost + totalLunchCost;

  const bakerVaiRemainBalance = totalIncomeOfTicket - totalExpenses;
  return bakerVaiRemainBalance;
}

// ----Problem number: 02 ---------
function checkName(name) {
  if (typeof (name) != 'string') {
    return 'Invalid';
  }
  let param = (name.toLowerCase()[name.length - 1]);
  switch (param) {
    case 'a':
      return 'Good Name';
    case 'y':
      return 'Good Name';
    case 'i':
      return 'Good Name';
    case 'e':
      return 'Good Name';
    case 'o':
      return 'Good Name';
    case 'u':
      return 'Good Name';
    case 'w':
      return 'Good Name';
    default:
      return 'Bad Name';
  }
}

// ----Problem number: 03----------
function deleteInvalids(array) {
  if (Array.isArray(array)) {
    let num = [];
    for (const item of array) {
      if (Number.isInteger(item)) {
        num.push(item);
      }
    }
    return num;
  } else {
    return "The Array Is Invalid";
  }
}

// ----Problem number: 04----------
function password(obj) {
  const firstCondition = Object.keys(obj).length !== 3;
  const secondCondition = obj.name === null && obj.birthYear === null && obj.siteName === null;
  const thirdCondition = obj.birthYear.toString().length !== 4;
  if (firstCondition || secondCondition || thirdCondition) {
    return "Invalid";
  }
  else {
    const websiteName = obj.siteName;
    const userName = obj.name;
    const birthYear = obj.birthYear;
    const password = websiteName + "#" + userName + "@" + birthYear;
    const result = password.charAt(0).toUpperCase() + password.slice(1);
    return result;
  }
}

// ----Problem number: 05---------
function monthlySavings(arr, number) {
  if (Array.isArray(arr) && Number.isInteger(number)) {
    let sum = 0;
    for (const item of arr) {
      if (item < 3000) {
        sum += item;
      }
      else {
        const tax = item * 20 / 100;
        const afterTax = item - tax;
        sum += afterTax;
      }
    }
    const shahidSavings = sum - number;

    if (shahidSavings < 0) {
      return 'earn more';
    }

    return shahidSavings;
  }
  else {
    return 'Invalid input';
  }

}

