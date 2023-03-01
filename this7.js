//console.log(this);

const kodomAli = {
    name: 'kodom',
    money: 5000,
    study: 'math',
    subjects: ['calculas', 'algebra', 'geometry'],
    exam: function(){
       return ` ${this.name} is participating in an exam` ;
    },
    examArro: () => {
        console.log(this);//windows
    },
    examNested: () =>{
        const arrow = () =>{
            console.log(this);//windows
        }
        arrow();
    },
    improveExam: function(subject){
        this.exam();
        return ` ${this.name} is participating in an improveexam ${subject}` ;
    },
    treatDey: function(amount,tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}

kodomAli.exam();
//console.log(kodomAli);//{name: 'kodom', money: 5000, study: 'math', subjects: Array(3), exam: ƒ, …}

const badamAli = {
    name: 'kacha badam',
    money:8000
}
badamAli.exam = kodomAli.exam;
badamAli.exam();
console.log(badamAli)//{name: 'kacha badam', money: 8000, exam: ƒ}

function evenhandler(){
    console.log(this)
};//window

document.getElementById('click').addEventListener('click',function(){
    alert(this);//[object HTMLButtonElement] ai khetre jaar upore click kora hoy take e dekhabe
})
//arrow function and regular function e this er value change hoy