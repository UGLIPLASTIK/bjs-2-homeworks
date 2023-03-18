"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-4*a*c;

  if (d > 0) {
    let rootOne = (-b + Math.sqrt(d)) / (2*a);
    let rootTwo = (-b - Math.sqrt(d)) / (2*a);
    arr.push(rootOne);
    arr.push(rootTwo);
  } else if (d === 0) {
    let root = -b/(2*a);
    arr.push(root);
  }

  return arr;
}

let solution = solveEquation(2, 9, 1);
console.log(solution);
// solveEquation(16, 8, 1) равен 0



function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if (percent === NaN || contribution === NaN || amount === NaN || countMonths === NaN) {
    return false
  }

  const convertPercent = percent / 100;
  const mounthPercent = convertPercent / 12;
  const creditBody = amount - contribution;
  const monthlyPay = creditBody * (mounthPercent + (mounthPercent / (Math.pow(1 + mounthPercent, countMonths) - 1)));
  const totalAmount = monthlyPay * countMonths;
  // console.log(`Ежемесячный платеж: ${monthlyPay.toFixed(2)}`);
  return Number(totalAmount);
}

let total = calculateTotalMortgage(10, 0, 89000, 12);
console.log(`Всего: ${+total.toFixed(2)}`);
