var geo = require('geo-distance-js');
/*
 2300 Butler National Dr, Pflugerville, TX, United States at 30.4762,  -97.579279
 302 Green Acres Dr, Marble Falls, TX, United States at      30.578205,-98.38287
*/

var fromLat = 30.4762;  
var fromLng = -97.579279;
var toLat   = 30.578205;
var toLng   = -98.38287;

var to     = [ { lat: 30.578205, lng:-98.38287 } ];
var from   = { lat: 30.4762,   lng: -97.579279 };
var result = geo.getDistance(from, to);

console.dir(result);
console.log("Distance is %d miles", result[0].distance);
