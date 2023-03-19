'use strict'

function getArrayParams(...arr) {
  let max = Math.max.apply(null, arr),
      min = Math.min.apply(null, arr),
      avg = arr.reduce((acc, arr) => acc + arr, 0) / arr.length;
  
  return { min: min, max: max, avg: +avg.toFixed(2) };
}

// console.log(getArrayParams(1,2,3,4,50,7,7,8,30))

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((acc, arr) => acc + arr, 0);
  return sum
}

// console.log(summElementsWorker(1,2,3,4,50,7,7,8,30));

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = Math.max.apply(null, arr),
      min = Math.min.apply(null, arr);
  const difference = max - min;
  return difference;
}

// console.log(differenceMaxMinWorker(1,2,3,4,50,7,7,8,30));

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenEl = 0,
      sumOddEl = 0;
  for (let i = 0; i < arr.length; i++){
    if ((arr[i] % 2) === 0) {
      sumEvenEl += arr[i];
    } else {
      sumOddEl += arr[i];
    }
  }
  return sumEvenEl - sumOddEl;
}
// console.log(differenceEvenOddWorker(1,2,3,4,5,6,7,8,9));


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElements = 0,
      countEvenElements = 0;
  for (let i = 0; i < arr.length; i++){
    if ((arr[i] % 2) === 0) {
      sumEvenElements += arr[i];
      countEvenElements++;
    }
  }
  return sumEvenElements / countEvenElements;
}

// console.log(averageEvenElementsWorker(1,2,3,4,5,6,7,8,9));


const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {    
    if (maxWorkerResult < func(arrOfArr[i])) {
      maxWorkerResult = func(arrOfArr[i]);
    }
  }
  return maxWorkerResult
}

let solWork = makeWork(arr, getArrayParams);
console.log(solWork);
