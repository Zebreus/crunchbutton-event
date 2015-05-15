var https  = require('https');



https .get({
  hostname: 'cockpit.la',
  port: 443,
  path: '/api/config',
  agent: false
}, function (res) {
  // Do stuff with response
	console.log(res);
});

/*

var options = {
	host: 'beta.crunchr.co',
	path: '/api/config',
	method: 'GET'
};

var complete = function(data) {
	console.log(data);
};

var req = http.request(options, function(res) {
	console.log('>> statusCode: ', res.statusCode);
	console.log('>> headers: ', res.headers);

	var str = '';
	res.on('data', function (chunk) {
		str += chunk;
	});
	res.on('end', function () {
		complete(str);
	});

});


req.write(postData);
req.end();
*/
/*

var options = {
	host: 'cockpit.la',
	path: '/api/config',
	port: '443',
	method: 'GET',
	headers: {
		'Cookie': 'PHPSESSID=1; token=1'
	}
};

var complete = function(data) {
	console.log(data);
};

var req = http.request(options, function(res) {
	console.log('>> statusCode: ', res.statusCode);
	console.log('>> headers: ', res.headers);

	var str = '';
	res.on('data', function (chunk) {
		str += chunk;
	});
	res.on('end', function () {
		complete(str);
	});

});

*/