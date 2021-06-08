const student = {
  name: null,
  lastName: null
};

student.name = prompt('Enter the Name:');
student.lastName = prompt('Enter the Last Name:');

(function createTable() {
  let subject = prompt('Enter the subject');
  let evaluation = null;
  if (subject === null) {
    return;
  } else {
    evaluation = +prompt('Enter the evaluation');
    student.tabel = {};
    student.tabel[`${subject}`] = evaluation;
    subject = prompt('Enter the subject');
    while (subject !== null) {
      evaluation = +prompt('Enter the evaluation');
      student.tabel[`${subject}`] = evaluation;
      subject = prompt('Enter the subject');
    }
  }
}());

for (const key in student) {

  if (typeof (student[`${key}`]) === 'object') {
    let result = 0;
    let counter = 0;
    let lessEvaluationThanNeeded = 0;

    for (props in student[`${key}`]) {
      result += student[`${key}`][`${props}`];
      counter++;
      if (student[`${key}`][`${props}`] < 4) {
        lessEvaluationThanNeeded++;
      }
    }

    if (result / counter > 7) {
      alert('Студенту назначена стипендия');
    }

    if (lessEvaluationThanNeeded === 0) {
      alert('Студент переведен на следующий курс');
    }
  }

}