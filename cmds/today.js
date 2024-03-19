const getPoem = require('../utils/poem.js');

module.exports = async (args) => {
	try {
		const poem = await getPoem();
		console.log(poem);
	}
	catch (error) {
		console.error("Error occured in today.js: ", error);
	}
}

/*
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
*/
