const getPoem = require('../utils/poem.js');

module.exports = async (args) => {
	console.log('Getting poem...');
	try {
		const poem = await getPoem();

		console.log(poem);
	}
	catch (error) {
		console.error(error);
	}
}
