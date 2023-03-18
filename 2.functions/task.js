'use strict'

function getArrayParams(...arr) {
  let max = Math.max.apply(null, arr),
      min = Math.min.apply(null, arr),
      avg = arr.reduce((acc, arr) => acc + arr, 0) / arr.length;
  
  return { min: min, max: max, avg: +avg.toFixed(2) };
}

let sol = getArrayParams(1,2,3,4,50,7,7,8,30);
console.log(sol)

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
