const obb = {
    name:'umak',
    age:12
}
//shallow copy
const copy = {...obb};
//
const obb2 = {
    name:'umak',
    age:12
}

const obb3 = JSON.parse(JSON.stringify(obb2));//2 ta object akhn same hole tader modddhe akhn ar kuno relaiton thakbe na

