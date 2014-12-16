var Q 	= require('q')
	def = Q.defer();


function prepend(){

	return prepend.arguments[0] = "DR. " + prepend.arguments[0]; 
}

def.promise.then(prepend).then(console.log);

def.resolve("MANHATTAN");