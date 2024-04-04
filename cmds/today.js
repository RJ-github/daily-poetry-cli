const getPoem = require('../utils/poem.js');

module.exports = async (args) => {
	try {
		const poemData = await getPoem();
		let poemAuthor = poemData.poemAuthor;
		let poemTitle = poemData.poemTitle;
		let poem = poemData.poem;
		console.log(poemAuthor, '\n \n', poemTitle, '\n \n', poem);
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
