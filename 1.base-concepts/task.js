"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-4*a*c;

  if (d > 0) {
    let rootOne = (-b + Math.sqrt(d)) / (2*a);
    let rootTwo = (-b - Math.sqrt(d)) / (2*a);
    arr.push(rootOne.toFixed(2));
    arr.push(rootTwo.toFixed(2));
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
  switch (true) {
    case isNaN(percent):
      return console.log("Некорректное значение percent")
    case isNaN(contribution):
      return console.log("Некорректное значение contribution")
    case isNaN(amount):
      return console.log("Некорректное значение amount")
    case isNaN(countMonths):
      return console.log("Некорректное значение countMonths")
  }

  const convertPercent = percent / 100;
  const mounthPercent = convertPercent / 12;
  const creditBody = amount - contribution;
  const monthlyPay = creditBody * (mounthPercent + (mounthPercent / (Math.pow(1 + mounthPercent, countMonths) - 1)));
  const totalAmount = monthlyPay * countMonths;
  // console.log(`Ежемесячный платеж: ${monthlyPay.toFixed(2)}`);
  return totalAmount;
}

let total = calculateTotalMortgage(10, 0, 50000, 12);
console.log(`Всего: ${+total.toFixed(2)}`);
