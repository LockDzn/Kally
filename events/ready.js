var colors = require('colors');
var os = require('os');
module.exports = client => {
	let settings = client.settings
    console.log(`\nKally iniciado com sucesso!`.bold.magenta)

    require('../util/commandsLoader.js')(client);
}
