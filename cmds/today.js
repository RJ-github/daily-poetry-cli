const getPoem = require('../utils/poem.js');
const ora = require('ora');

module.exports = async (args) => {
	const spinner = ora({spinner: 'aesthetic'}).start();
	try {
		const poem = await getPoem();

		spinner.stop();

		console.log('\n', poem);
	}
	catch (error) {
		spinner.stop();
		console.error(error);
	}
}
