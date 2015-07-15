var Hapi = require('hapi');
var routes = require('./app/routes');

var server = new Hapi.Server();
server.connection({ port: 3000 });
server.route(routes);
server.start(function startServer() {
	console.log('Server running at:', server.info.uri);
});
