const kodomAli = {
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
        return this.money;
    }
}

const badamAli = {
    name: 'kacha badam',
    money:8000
}
const result2 = kodomAli.exam.call(badamAli);//kodom ali er exam  value k call er maddhome badam alite niye asha hoilo
console.log(result2);
//
const badamMoney = kodomAli.treatDey.call(badamAli, 400, 40);
console.log(badamMoney);
const badamMoney2 = kodomAli.treatDey.apply(badamAli, [1000, 100])
console.log(badamMoney2)
const badamAliThreat = kodomAli.treatDey.bind(badamAli);
const remaining1 = badamAliThreat(1000, 100)
console.log(remaining1);

