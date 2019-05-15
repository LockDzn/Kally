const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    

    let servidores = client.guilds.filter(g => g.id !== "0").map(gs => `${gs.id}`)
    //                                 message.guild.id
    const smallGuilds = client.guilds.filter(g => g.memberCount > 10).map(g => g.name).join("\n");
    message.channel.send(smallGuilds)
}

exports.help = {
    name: "serversrank",
    aliases: [
        'top10servers'
    ]
}