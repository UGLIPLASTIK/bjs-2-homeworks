"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-4*a*c;

  if (d > 0) {
    let solOne = (-b + Math.sqrt(d)) / (2*a);
    let solTwo = (-b - Math.sqrt(d)) / (2*a);
    arr.push(solOne.toFixed(2));
    arr.push(solTwo.toFixed(2));
  } else if (d === 0) {
    let root = -b/(2*a);
    arr.push(root);
  }

  console.log(d);
  console.log(arr);
  return arr;
}

solveEquation(2, 9, 1)
// solveEquation(16, 8, 1) равен 0

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}