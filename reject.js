Q = require('q');

var def = Q.defer();

// attach the  righ handlers defer(fulfillHandler,rejectHandler)
def.promise.then(console.log,function(error){

	console.log(error.message);
})


// force the promise to reject
setTimeout(def.reject,300,{message:"REJECTED!"})
