var Hapi = require('hapi');
var routes = require('./app/routes');

var server = new Hapi.Server();
server.connection({ port: process.env.PORT || 3000 });

/*
server.register(require('bell'), function registerBell(err) {
	server.auth.strategy('github', 'bell', {
		provider: 'github',
		password: process.env.COOKIE_ENCRYPTION_PASSWORD,
		clientId: process.env.GITHUB_CLIENT_ID,
		clientSecret: process.env.GITHUB_CLIENT_SECRET,
		isSecure: false // Terrible idea but required if not using HTTPS
	});

	server.route(routes);
});
*/

server.route(routes);
server.start(function startServer() {
	console.log('Server running at:', server.info.uri);
});
