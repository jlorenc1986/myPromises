var Q = require('q');


function parsePromised (json) {
	// body...
	var p = q.defer(),
		r;

	try{
		r = JSON.parse(json);
		

	}catch(e){
		console.log(e);
		d.reject(e);
	}

	def.resolve(r);

	return def.promise;
}

parsePromised(process.argv[2]).then(null,console.log);