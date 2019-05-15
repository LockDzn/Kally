const Discord = require("discord.js");
const fs = require("fs");
//const db = require('quick.db');

module.exports.run = async (client, message, args, prefix) =>{

    //if(message.author.id !== "244537374258888725") return message.reply("comando temporariamente desativado! :frowning:")
    
    const comousar = new Discord.RichEmbed()
        .setAuthor("Kally", client.user.avatarURL)
        .setTitle(`${prefix}prefix`)
        .setDescription(`Irá mudar o prefix desse servidor.`)
        .setColor("#22a7cc")
        .setFooter("© Kally - kally.glitch.me")
        .addField("Como usar:", `\`${prefix}prefix <novo prefix>\``)
        .addField("Permissão:", "O staff que for usar o comando tem que está em um cargo com a permissão `Gerenciar servidor`.")
    const emojinop = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyNop");
    if(!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`você não tem permissão! ${emojinop}`).then(msg => msg.delete(5000));

    const query = client.db;
    var res = await query(`SELECT * FROM guilds where guild_id='${message.guild.id}'`);

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have the permission to use this command!");

    if(!args[0]) return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));

    if(res[0]) query( `UPDATE guilds SET prefix = '${args[0]}' WHERE guild_id = '${message.guild.id}'`);
    else query(`INSERT INTO guilds(guild_id, prefix) values ('${message.guild.id}', '${args[0]}')`);


    message.channel.send(`:tada: **|** ${message.author}, o prefix desse servidor foi alterado para **${args[0]}**.`)

    const newprefix = new Discord.RichEmbed()
        .setAuthor(`Registro`, message.author.avatarURL)
        .setDescription(`**EXECUTADO POR ${message.author.tag}**\n\nMudou o prefix para **${args[0]}**`)
        .setColor("f1ff12")
            
        .setTimestamp()
        .setFooter(`Servidor: ${message.guild.name} e Canal: ${message.channel.name}`, message.guild.iconURL)
    client.channels.get("471318326824534016").send(newprefix)


}

exports.help = {
    name: "prefix",
}
