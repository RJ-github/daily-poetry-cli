const axios = require('axios');
const fs = require('fs');
const moment = require('moment');

const POEM_CACHE_FILE = 'poem_cache.json';

module.exports = async (args) => {
	try {
		let poem = await getCachedPoem();

		if (!poem) {
			poem = await fetchAndCachePoem();
		}
		return poem;
	}
	catch (error) {
		console.error("Error fetching poem: ", error);
	}
}

async function fetchPoem() {
	try {
		const url = `https://poetrydb.org/random`;
		const response = await axios.get(url);
		const poemJson = await response.data;
		const poemAuthor = poemJson[0].author;
		const poemTitle = poemJson[0].title;

		if(poemJson.length > 0 && poemJson[0].lines) {
			const poemLines = poemJson[0].lines;
			const poem = poemLines.join('\n');
			console.log('\nAuthor: ', poemAuthor);
			console.log('\nTitle: ', poemTitle, "\n");
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

async function getCachedPoem() {
	try {
		if (!fs.existsSync(POEM_CACHE_FILE)) {
			return null;
		}

		const poemData = JSON.parse(fs.readFileSync(POEM_CACHE_FILE));
		const lastAccessed = moment(poemData.lastAccessed);
		const today = moment();

		if (today.isSame(lastAccessed, 'day')) {
			return poemData.poem;
		}
		return null;
	}
	catch (error) {
		console.error(error);
	}
}

async function fetchAndCachePoem() {
	try {
		const poem = await fetchPoem();
		const poemData = {
			poem,
			lastAccessed: moment().format('YYYY-MM-DD')
		};
		fs.writeFileSync(POEM_CACHE_FILE, JSON.stringify(poemData, null, 2));
		return poem;
	}
	catch (error) {
		throw new Error("Error fetching and caching poem: ", error.message);
	}
}
