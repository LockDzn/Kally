const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) =>{

    const query = client.db;

    message.delete().catch(O_o=>{});

    let servidor = args.join(" ");
    if(!servidor) return message.reply(`use assim: \`${prefix}servers <id ou nome do servidor>\``)
	   
    var guild = client.guilds.find(gd => gd.name === servidor)
    if(!guild) guild = client.guilds.get(servidor)
    if(!guild)
        return message.reply("o servidor não existe!")

    var res = await query(`SELECT * FROM guilds where guild_id='${guild.id}'`);
    if(res[0]) {
	    var prefix = res[0].prefix
    } else if(!res[0]) {
	    var prefix = "k!"
    }
        
    const infoserv = new Discord.RichEmbed()
        .setAuthor(guild.name, guild.iconURL)
        .setDescription(`Informação do servidor **${guild.name}** (ID: **${guild.id}**):`)
        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
        .setFooter("© Kally")
        .addField(":crown: Dono:", guild.owner.user.tag)
        .addField(":busts_in_silhouette: Quantidade de membros:", `${guild.memberCount - guild.members.filter(m=>m.user.bot).size} - ${guild.members.filter(m=>m.user.bot).size} bot(s)`)
        .addField(":diamonds: Prefix", prefix)

    message.channel.send(infoserv)
}

exports.help = {
    name: "servers",
    aliases: [
        'getserver',
        'server'
    ]
}
