var q = require('q');


	function throwMyGod () {
		
		return new Error("OH NOES");
	}


	function iterate(n) {
		// body...
		console.log(n);

		return  ++n;
	}




	q.fcall(iterate, 1)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(throwMyGod)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(null, console.log);