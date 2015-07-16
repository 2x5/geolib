var rp  = require('request-promise');
var geo = require('geolib');
 
module.exports.getCoordinates = function getCoords(address, cb) {

  var addresses = [].concat( address );
  var options = {
    uri : 'http://www.datasciencetoolkit.org/street2coordinates',
    method : 'POST',
    body: JSON.stringify(addresses),
    timeout: 5000,
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

module.exports.milesBetween = function getMilesBetween(from, to) {
  return geo.getDistance(from, to);
}

