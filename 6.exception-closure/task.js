function parseCount(number){
  let parseInt = Number.parseFloat(number)
  if(isNaN(parseInt)){
    throw new Error("Невалидное значение");
  }
  return parseInt
}

function validateCount(number){
  try{
    return parseCount(number);
  } catch (error){
    return error;
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
    let pp = this.perimeter / 2;
    return Number(Math.sqrt(pp * (pp - this.side1)*(pp - this.side2)*(pp - this.side3)).toFixed(3))
  }
}


function getTriangle(side1,side2,side3){
  try{
    if(side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2){
      throw error
    }
    return new Triangle(side1,side2,side3)

  } catch(error){
    let triangle = {
      get perimeter(){
        return "Ошибка! Треугольник не существует"
      },
      get area(){
        return "Ошибка! Треугольник не существует"
      }
    }
    return triangle
  }
}

let triangle = getTriangle(6,10,15);
console.log(triangle);