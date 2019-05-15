const Discord = require('discord.js');
const client = new Discord.Client();
      client.db = require('./pgsql.js');
      client.findColour = require('./util/colourFinder.js');
      client.findUser = require('./util/userFinder.js');

require('./util/eventLoader')(client);

run();
client.on('ready', () =>{
      
    let gameloop = require(`./util/gameloop.js`);
    gameloop.run(client);
      
});

async function run() {
    client.settings = require('./util/config.json')
    client.login(client.settings.token);
}
