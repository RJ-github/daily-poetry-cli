const menus = {
	main: `
	poem [command] <options>

	today ..................... show poem for the day
	
	version || v .............. show package version

	help || h ................. show help menu for command
	`,
}

module.exports = (args) => {
	const subCmd = args._[0] === 'help'
	? args._[1]
	: args._[0];

	console.log(menus[subCmd] || menus.main);
};
