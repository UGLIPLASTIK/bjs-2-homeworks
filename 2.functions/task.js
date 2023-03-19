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
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((acc, arr) => acc + arr, 0);
  return sum
}

let solSum = summElementsWorker(1,2,3,4,50,7,7,8,30);
console.log(sum);

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = Math.max.apply(null, arr),
      min = Math.min.apply(null, arr);
  const difference = max - min;
  return difference;
}

let solDif = differenceMaxMinWorker(1,2,3,4,50,7,7,8,30);
console.log(solDif);

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
let solEvenDiff = differenceEvenOddWorker(1,2,3,4,5,6,7,8,9);
console.log(solEvenDiff);


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

let solAverEven = averageEvenElementsWorker(1,2,3,4,5,6,7,8,9);
console.log(solAverEven);

function makeWork (arrOfArr, func) {

}
