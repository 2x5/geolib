var util = require('./util')

var addresses = [
    '2300 Amen Corner Road, Pflugerville, TX 78660',
    '2543 Graystone Place, Simi Valley, CA 93065',
    '100 Main Street, Anytown, OH 88939'
];


util.getCoordinates(addresses, function(result){
  console.dir(result);
}) ;
/*
 2300 Butler National Dr, Pflugerville, TX, United States at 30.4762,  -97.579279
 302 Green Acres Dr, Marble Falls, TX, United States at      30.578205,-98.38287

var to     = { latitude: 30.578205, longitude:-98.38287 } 
var from   = { latitude: 30.4762,   longitude: -97.579279 }

var result = util.getMilesBetween(from, to);

console.dir(result)
console.log("Distance is %d miles", result)
*/
