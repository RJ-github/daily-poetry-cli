const axios = require('axios');
const getPoemTitle = require('./poemTitle.js');

module.exports = async (args) => {
	try {
	const poemTitle = await getPoemTitle();
	const url = `https://poetrydb.org/title/${poemTitle}`;
	const response = await axios.get(url);
	const poemJson = await response.data;

	if(poemJson.length > 0 && poemJson[0].lines) {
		const poemLines = poemJson[0].lines;
		const poem = poemLines.join('\n');
		console.log('Title: ', poemTitle);
		return poem;
	}
	else {
		throw new Error('No poem data found');
	}
	}
	catch (err) {
		console.error('Error fetching poem: ', err);
	}
}
