const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) =>{

    let servidor = args[0]
    if(!servidor) return message.reply(`use assim: \`${prefix}serverinvite <id do servidor> <nome/id do canal>\``)
    let canal = args[1]
    if(!canal) return message.reply(`use assim: \`${prefix}serverinvite <id do servidor> <nome/id do canal>\``)
    var guild = client.guilds.find(gd => gd.name === servidor)
    if(!guild) guild = client.guilds.get(servidor)
    if(!guild)
        return message.reply("por favor, o servidor que você digitou não existe!")
    
    var channel = client.guilds.get(guild.id).channels.find(ch => ch.name === canal)
    if(!channel) channel = client.guilds.get(guild.id).channels.get(canal)
    if(!channel)
        return message.reply("por favor, o canal que você digitou não existe!")
    
    channel.createInvite({maxAge: 0}).then(invite => {

            let embed = new Discord.RichEmbed()
                .setAuthor(guild.name, guild.iconURL)
                .setDescription(`Criei o invite no servidor \`${guild.name}\`, no canal \`${channel.name}\``)
                .addField("Link do invite:", invite)
                .setFooter(`© Por: ${message.author.tag}`)
            message.channel.send(message.author, embed);
    });
}

exports.help = {
    name: "serverinvite",
    aliases: [
        'svinvite',
        'svinv'
    ]
}
