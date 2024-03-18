//this file/code is not used
const axios = require('axios');

module.exports = async (args) => {
	try {
		const url = 'https://poetrydb.org/title'
		const response = await axios.get(url);
		const poemJson = await response.data; 

		if(poemJson.titles.length > 0 && poemJson.titles) {
			const poemTitles = poemJson.titles;
			const randomNum = Math.floor(Math.random() * poemTitles.length);
			const randPoem = poemTitles[randomNum];
			return randPoem;
		}
		else {
			throw new Error('No poem data found');
		}
	}
	catch (error){
		console.error('Error fetching poem: ', error);
	}
}
