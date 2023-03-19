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
  const sum = arr.reduce((acc, arr) => acc + arr, 0);
  return sum
}

let solSum = summElementsWorker(1,2,3,4,50,7,7,8,30);
console.log(sum);

function differenceMaxMinWorker(...arr) {
  let max = Math.max.apply(null, arr),
      min = Math.min.apply(null, arr);
  const difference = max - min;
  return difference;
}

let solDif = differenceMaxMinWorker(1,2,3,4,50,7,7,8,30);
console.log(solDif);

function differenceEvenOddWorker(...arr) {
  const sumEvenEl = 0,
        sumOddEl = 0;
  for (let i = 0; i > arr.length; i++){
    if (arr[i] % 2 == 0) {
      sumEvenEl += arr[i];
    } else {
      sumOddEl += arr[i];
    }
  }
  console.log(`SumEven ${sumEvenEl}, sumodd ${sumOddEl}`);
  return sumEvenEl;
}
let solEven = differenceEvenOddWorker(1,2,3,4,50,7,7,8,30);
console.log(solEven);

let array = [1,2,3,4];
let sumEvenEl = 0,
      sumOddEl = 0;
for (let i = 0; i > array.length; i++){
  console.log(array[i]);
  // if (array[i] % 2 === 0) {
  //   sumEvenEl += array[i];
  //   console.log(sumEvenEl);
  // } else {
  //   sumOddEl += array[i];
  //   console.log(sumOddEl);
  // }
}
console.log(sumOddEl);

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
