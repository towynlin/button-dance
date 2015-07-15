module.exports = {
	index: function index(request, reply) {
		return reply('<h1>Animals</h1>');
	},
	create: function create(request, reply) {
		return reply().code(201);
	}
};
