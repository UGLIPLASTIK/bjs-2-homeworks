function parseCount(number){
  if(isNaN(Number.parseFloat(number))) {
    throw new Error("Невалидное значение");
  }
  return Number.parseFloat(number)
}

function validateCount(number){
  try{
    return parseCount(number);
  } catch (error){
    return error;
  } finally {
  }
}


class Triangle{
  constructor(side1, side2, side3){
    if(side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2){
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  get perimeter(){
    return Number(this.side1 + this.side2 + this.side3);
  }

  get area(){
    const pp = 1/2 * (this.side1 + this.side2 + this.side3);
    return Number(Math.sqrt(pp * (pp - this.side1)*(pp - this.side2)*(pp - this.side3)).toFixed(3))
  }
}


function getTriangle(a,b,c){
  if(a + b < c || b + c < a || a + c < b){
    throw new Error('Треугольник с такими сторонами не существует');
  }
  this.a = a,
  this.b = b,
  this.c = c
}

let newTriangle = new getTriangle(6,5,15);
console.log(newTriangle);