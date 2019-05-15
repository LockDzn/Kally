const Discord = require("discord.js");
const moment = require('moment');
const fs = require('fs');

module.exports = async message => {
	
    if(message.channel.type == 'dm') {
	if(message.author.bot) return;
        message.author.send("Para executar um comando meu use um servidor que eu esteja!").catch(O_o=>{});
	const convite = new Discord.RichEmbed()
		.setColor("#1297f0")
		.setAuthor("Convite")
		.addField("Convite para servidor de suporte do Kally:", "https://discord.gg/mxXHyN7")
		.addField("Invite para colocar o Kally no seu servidor:", "https://kally.glitch.me/invite.html")
	message.author.send(convite).catch(O_o=>{});
	return;
    }

    var client = message.client;
    var settings = client.settings
    var prefix2 = null;
    const query = client.db;
	
    var res = await query(`SELECT * FROM guilds where guild_id='${message.guild.id}'`);
    if(res[0]) {
	var prefix = res[0].prefix
    } else if(!res[0]) {
	var prefix = "k!"
    }
	
    if(message.content == '<@415288373071183872>'){
	const ayy = client.emojis.find(em => em.name === "Kally");	
	message.channel.send(`${ayy} | Olá ${message.author}, eu sou Kally, meu prefix é \`${prefix}\`, para saber meus comandos digite \`${prefix}ajuda\`.`)
    }
    
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    const allargs = args.join(" ");
    let command = messageArray[0];
    let isOwner = false;
    if(settings.ownerID == message.author.id) isOwner = true;
    
    if(message.channel.type == 'dm') {
	if(message.author.bot) return;
    }
    else {

	if(!message.content.startsWith(prefix)) return;
    
        let cmd = client.commands.get(command.slice(prefix.length)) ||
        client.commands.get(client.aliases.get(command.slice(prefix.length)));
    
        if(!cmd) return;
        
        const emojinop = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyNop");
        if((cmd.help.type == "dev" && !isOwner)) return message.reply(`essa função esta disponível somente para o desenvolvedor do bot! ${emojinop}`);
        let bool = await require('../util/permsChecker.js')(cmd, message);
        if(bool) {
	    const cmdembed = new Discord.RichEmbed()
		.setAuthor(`${command}`, message.author.avatarURL)
		.setDescription("\n**EXECUTADO POR " + message.author.tag + "**\n```" + command + " " + allargs + "```")
		.setColor("f1ff12")
			
		.setTimestamp()
		.setFooter(`Servidor: ${message.guild.name} - Canal: ${message.channel.name}`, message.guild.iconURL)
	    client.channels.get("458342361370591252").send(cmdembed);
            cmd.run(client, message, args, prefix)
        };
    }
};
