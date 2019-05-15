const Discord = require('discord.js');

exports.run = async (client, message, args) => {


    const votar = new Discord.RichEmbed()
        .setAuthor("AJUDE O KALLY", client.user.avatarURL)
        .setDescription(`**Ajude o Kally votando nele!**\n\n*Para votar clique nos links abaixo:*\n\n **Vespertine's Bot**: [clique aqui](https://bots.perfectdreams.net/bot/415288373071183872/vote)\n**DiscordBots**: [clique aqui](https://discordbots.org/bot/415288373071183872/vote)`)
        .setColor("#22a7cc")
        .setFooter("© Kally - kally.glitch.me")
    message.channel.send(message.author, votar)
    
}

exports.help = {
    name: "votar",
}
