var UsersController = require('./controllers/UsersController');
var ScoresController = require('./controllers/ScoresController');
var AnimalsController = require('./controllers/AnimalsController');
var LikesController = require('./controllers/LikesController');

module.exports = [
	{
		method: 'GET',
		path: '/',
		handler: function handleRoot(request, reply) {
			return reply.redirect('/animals');
		}
	},
	{
		method: 'POST',
		path: '/users/',
		handler: UsersController.create
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
		handler: AnimalsController.create,
		config: {}// auth: 'github' }
	},
	{
		method: 'POST',
		path: '/likes',
		handler: LikesController.create,
		config: {}// auth: 'github' }
	}
];
