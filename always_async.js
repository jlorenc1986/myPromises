Q = require('q');

var def = Q.defer();


def.promise.then(console.log);



def.resolve("SECOND");

console.log("FIRST"); 