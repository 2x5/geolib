var util = require('./util')

var addresses = [
    '2300 Amen Corner Road, Pflugerville, TX 78660',
    '2543 Graystone Place, Simi Valley, CA 93065',
    '100 Main Street, Anytown, OH 88939'
];

util.getCoordinates('211 E. 7th Street, Austin, TX', function(result){
  console.dir(result);
}) ;

util.getCoordinates(addresses, function(result){
  console.dir(result);
}) ;

var from   = { latitude: 30.4762,   longitude: -97.579279 }
var to     = { latitude: 30.578205, longitude:-98.38287 } 

var result = util.milesBetween(from, to);
console.log("Distance is %d miles", (result * 0.000621371192).toFixed(2));
