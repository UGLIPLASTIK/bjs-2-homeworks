'use strict'

function getArrayParams(...arr) {
  let max = Math.max.apply(null, arr),
      min = Math.min.apply(null, arr),
      avg = arr.reduce((acc, arr) => acc + arr, 0) / arr.length;
  
  return { min: min, max: max, avg: +avg.toFixed(2) };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((acc, arr) => acc + arr, 0);
  return sum
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = Math.max.apply(null, arr),
      min = Math.min.apply(null, arr);
  const difference = max - min;
  return difference;
}

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

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++){
    if (func(...arrOfArr[i]) > maxWorkerResult){
      maxWorkerResult = func(...arrOfArr[i]);
    }
  }
  return maxWorkerResult
}