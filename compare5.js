const first = {a: 5};
const second = {a: 5}; // array and object k comapre korte gele tader vale same hole o '===' ai sighn er maddhome tader refference o jante chaibe j segula kun jaygay ache
const third = second;//aita thik ache
if(first === second){
//if(third === second){
    console.log('same')
}
else{
    console.log('different');
}
/// do not use
const first1 = {a:5, b:2, d:5};
const  second1 = {a:5, c:5, b:2};//b er place chane
const firstSrting = JSON.stringify(first1);
const secondString = JSON.stringify(second);
if(firstSrting === secondString){
    console.log('same')
}
else{
    console.log('different') //refference same na
}
//
function compareObject(first,second){
    const firstKeys = Object.keys(first1);
    const secondKeys = Object.keys(second1);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

const isSame = compareObject(first1,second1)
console.log(isSame);