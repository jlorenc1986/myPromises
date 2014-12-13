Q = require('q');

  
var defer = Q.defer();

defer.promise.then(console.log);

setTimeout(defer.resolve, 300, "RESOLVED!");
