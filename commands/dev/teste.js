const Discord = require('discord.js');

exports.run = async (client, message, args) => {
      message.channel.send(`${(process.cpuUsage().heapUsed).toFixed(2)}%`)
}

exports.help = {
    name: "testett",
    aliases: [
        'tt'
    ]
}
