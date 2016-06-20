var inRange = require('is-in-range');

module.exports = function getKeyRange(obj, key) {
    var ranges = Object.keys(obj);
    for(var k = 0; k < ranges.length; k++) {
        if(inRange(ranges[k], key)) return obj[ranges[k]];
    }
};
