const cronJob = require('cron');

module.exports = (args) => {
	try {
	const job = new cronJob.CronJob(
		'* * * * * *', // cronTime
		function () {
			console.log('You will see this message every second');
		}, // onTick
		null, // onComplete
		false, // start
		'America/Los_Angeles' // timeZone
	);

	job.start();
	}
	catch (err) {
		console.error('Error: ', err);
	}
}
