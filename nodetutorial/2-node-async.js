var fs = require('fs');

console.log('demo to asynchronous -1')

fs.readFile('1-node-gettingstarted.js', function(err, data) {
	if (err)
	{
		console.log('error in reading')
	} else{
	console.log('success -2')
}
});

function simpleInterest(p,r,t){

    for (i=0;i<100000;i++)
    {

    }
    return (p*r*t)/100
}

si = simpleInterest(10000,4,1)
console.log("si is -3 "+si)

console.log('Completed si function execution -4')