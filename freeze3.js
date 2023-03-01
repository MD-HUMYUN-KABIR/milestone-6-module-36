const bottle = {color: ' yellow', price:50, isCleaned: true, capacity:1}
const keys = Object.keys(bottle);
console.log(keys); // property k keys o bole[ 'color', 'price', 'isCleaned', 'capacity' ]
//
const values = Object.values(bottle);
console.log(values);//[ ' yellow', 50, true, 1 ]
//
const pair = Object.entries(bottle); // no use
console.log(pair);//[ [ 'color', ' yellow' ], [ 'price', 50 ],[ 'isCleaned', true ], [ 'capacity', 1 ] ]
//
//Object.seal(bottle);// seal kore felle kuno object er property ar delete kora jay na and new property o add kora jay na but value change kora jay
Object.freeze(bottle);// object e kuno customize or add kora jabe na fixed hoye gese
delete bottle.isCleaned;
console.log(bottle);//{ color: ' yellow', price: 50, capacity: 1 }

