function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age,
  this.marks = []
}

let student1 = new Student('Oleg','male', 20),
    student2 = new Student('Anna','female', 18),
    student3 = new Student('Denis','male', 19),
    student4 = new Student('Ivan','male', 19),
    student5 = new Student('Maria','female', 20)

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMarks = function (...marks) {
  if ('marks' in this === false){
    return 0;
  }
  this.marks.push(...marks)
}

Student.prototype.getAverage = function () {
  return (!('marks' in this) || this.marks.length === 0) ? 0 : Number(((this.marks.reduce((a, i) => a + i, 0)) / this.marks.length).toFixed(0));
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}

