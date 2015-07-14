var rp  = require('request-promise');
 
function getCoords(address, cb) {

  var addresses = [].concat( address );
  var options = {
    uri : 'http://www.datasciencetoolkit.org/street2coordinates',
    method : 'POST',
    body: JSON.stringify(addresses),
    transform : 
        function (resp) { 
          var out = [];
          var data = JSON.parse(resp); 

          addresses.forEach(function(key, n) { 
            // console.log("%d) key: %s)", n, key);
            var coords = (data[key] === null) ?  {} : 
                {lat: data[key].latitude, lng: data[key].longitude}; 
            out.push({address: key, coordinates: coords});      
          });
          return out;         
        }
  };
  rp(options).then(cb).catch(console.error);
}

function getMilesBetween(from, to) {

  to     = [ { lat: 30.578205, lng:-98.38287 } ];
  from   = { lat: 30.4762,   lng: -97.579279 };
  var result = geo.getDistance(from, to);

  console.dir(result);
  console.log("Distance is %d miles", result[0].distance);
  return result[0].distance;
}

module.exports.getCoordinates  = getCoords;
module.exports.getMilesBetween = getMilesBetween;
