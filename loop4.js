const numbers = [12,54,65,54];
for( number of numbers){ // for of kuno object e kora jay na
    console.log(number);
}

/* 
3 ways to read object properties
bottle.color
bottle['color']
bottle[key]
*/
const bottle = {color: ' yellow', price:50, isCleaned: true, capacity:1}
const keys = Object.keys(bottle);
for(key of keys){
    console.log(key, bottle[key]);// property and value dekhabe---- no use
}

//
for(const key in bottle){
    console.log(key, bottle[key])
}
// advanced
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}
// for of hooche array er moddhe and for in hocche object er moddhe