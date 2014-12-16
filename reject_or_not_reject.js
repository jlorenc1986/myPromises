Q = require('q');

var def = Q.defer();

def.promise.then(console.log,console.log);

setTimeout(def.resolve, 300, "I FIRED");

setTimeout(def.reject, 600, "I DID NOT FIRE");