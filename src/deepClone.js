(function(exports) {

  function deepClone(obj) {
    var clone = {};
    for (var key in obj) {
       if (typeof obj[key] === "object") {
           clone[key] = deepClone(obj[key]);
       } else {
           clone[key] = obj[key];
       }
     }
     return clone;
  }

  exports.deepClone = deepClone;

})(this);
