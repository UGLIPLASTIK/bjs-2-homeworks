class PrintEditionItem{
  constructor(name, releaseDate, pagesCount){
    this.name = name,
    this.releaseDate = releaseDate,
    this.pagesCount = pagesCount,
    this.state = 100,
    this.type = null;
  }

  fix(){
    this.state = this.state * 1.5;
  }

  get state(){
    return this._state;
  }

  set state(number){
    if (number < 0) {
      this._state = 0;
    } else if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }
}

class Magazine extends PrintEditionItem{
  constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem{
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount),
    this.type = "book",
    this.author = author;
  }
}

class NovelBook extends Book{
  constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount),
    this.type = "novel";
  }
}

class FantasticBook extends Book{
  constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount),
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book{
  constructor(author, name, releaseDate, pagesCount){
    super(author, name, releaseDate, pagesCount),
    this.type = "detective";
  }
}

class Library{
  constructor(name){
    this.name = name,
    this.books = [];
  }

  addBook(book){
    if(book.state > 30){
      this.books.push(book)
    }
  }

  findBookBy(type, value){
    for(let book = 0; book < this.books.length; book++){
      if(this.books[book][type] === value){
        return this.books[book]
      } 
    }
  }

  giveBookByName(bookName){
    for (let book = 0; book < this.books.length; book++) {
      if(this.books[book].name === bookName) {
        let searchBook = this.books[book];
        let ind = this.books.indexOf(searchBook);
        this.books.splice(ind, 1);
        return searchBook;
      }
    }
  }
}

const library = new Library('central library');

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));

// console.log(library.giveBookByName('Машина времени'));
// console.log(library.giveBookByName('Мурзилка'));
// console.log(library);
// console.log(library.findBookBy('author', 'Аркадий и Борис Стругацкие'));

class Student{
  constructor(name) {
    this.name = name,
    this.marks = {}
  }
  
  setSubject(subjectName) {
    this.marks[subjectName] = [];
  }

  addMark(mark, subjectName) {
    if(mark < 2 || mark > 5) {
      return
    } else if(!(subjectName in this.marks)) {
      this.marks[subjectName] = [];
      this.marks[subjectName].push(mark);
    }
    else {
      this.marks[subjectName].push(mark);
    }
  }

  getAverageBySubject(subjectName) {
    return (!(subjectName in this.marks)) ? 0 : Number(((this.marks[subjectName].reduce((a, i) => a + i, 0)) / this.marks[subjectName].length).toFixed(1));
  }

  getAverage(){
    let sum = 0
    for(let i = 0; i < Object.values(this.marks).length; i++){
      sum += (Object.values(this.marks)[i].reduce((a, m) => a + m, 0)) / Object.values(this.marks)[i].length;
    }
    return Number((sum / Object.keys(this.marks).length).toFixed(1))
  }
}
// let student1 = new Student('Ivan');
// student1.setSubject('math')
// student1.addMark(5, 'math')
// student1.addMark(4, 'eng')
// student1.addMark(5, 'math')
// student1.addMark(4, 'eng')
// student1.addMark(5, 'chem')
// student1.addMark(5, 'chem')
// console.log(student1.getAverage())
// console.log(student1.marks)
