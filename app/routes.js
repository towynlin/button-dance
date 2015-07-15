var ScoresController = require('./controllers/ScoresController');
var AnimalsController = require('./controllers/AnimalsController');
var LikesController = require('./controllers/LikesController');

module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: function handleRoot(request, reply) {
			return reply.redirect('/scores');
		}
	},
	{
		method: 'GET',
		path: '/scores',
		handler: ScoresController.index
	},
	{
		method: 'GET',
		path: '/animals',
		handler: AnimalsController.index
	},
	{
		method: 'POST',
		path: '/animals',
		handler: AnimalsController.create
	},
	{
		method: 'POST',
		path: '/likes',
		handler: LikesController.create
	}
];
