const player = {
    
}
//property in object needed
player.name = 'small nirob';
player.specialitu = 'batsman';

//method in object
player.bat = function(){
    console.log('swing');
}
console.log(player);
player.bat();

// or needed
const student = {
    name:'panday',
    job:'khai',
    ball : function(){
        console.log('throw')
    },
    sallery:1000

}
// 2 object constructor
const person = new Object();
console.log(person); //{}

//3. object create method
const atel = Object.create(student);
console.log(atel);//{}
console.log(atel.name); //panday

// needed
class person1{
    name = 'abul';
    address = 'sador';
    constructor(age){
        this.age = age;
    }
}
const person2 = new person1(56);
console.log(person2);//person1 { name: 'abul', address: 'sador', age: 56 }

// 5 no use
function car (modal,price){
    this.modal = modal;
    this.price = price;
}
