const student = {
    name: 'kodom',
    money: 5000,
    study: 'math',
    subjects: ['calculas', 'algebra', 'geometry'],
    exam: function(){
       return ` ${this.name} is participating in an exam` ;
    },
    improveExam: function(subject){
        this.exam();
        return ` ${this.name} is participating in an improveexam ${subject}` ;
    },
    treatDey: function(amount,tips){
        this.money = this.money - amount - tips;
        return this.money;//calculation kore abar ei object er money te e tk store kortechi
    }
}
const output = student.exam();
console.log(output);
//kodom is participating in an exam
const reExam = student.improveExam('algebra');
console.log(reExam);
// kodom is participating in an improveexam algebra
const remaining = student.treatDey(900,100);
console.log(remaining);
const dolarRemaining = student.treatDey(500,50);
console.log(dolarRemaining);