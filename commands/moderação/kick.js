const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) =>{

    message.delete().catch(O_o=>{});
    const emojinop = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyNop");
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply(`você não tem permissão! ${emojinop}`).then(msg => msg.delete(6000));
    const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle(`${prefix}kick`)
      .setDescription(`Irá expulsar o usuário mencionado.`)
      .setColor("#22a7cc")
      .setFooter("© Kally - kally.glitch.me")
      .addField("Como usar", `\`${prefix}kick @usuário <motivo>\`\n\`${prefix}kick @LockDzn#8368 Otário\``)
      .addField("Permissão", "O staff que for kikar tem que está em um cargo com a permissão `Expulsar membros`")
     let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
     if(!member.bannable) 
        return message.reply("eu não posso expulsar esse usuário! Ele(a) têm um cargo maior.");

    let motivo = args.slice(1).join(' ');
    if(!motivo) motivo = "Não informado";
  
    await member.kick(`Expulso por: ${message.author.tag} | Motivo: ` + motivo)
      .catch(error => message.reply(`Desculpa ${message.author} Eu não poderia banir por causa de: ${error}`));
      
      
    const emojizoioban = client.guilds.get("420316735149965322").emojis.find(em => em.name === "zoioBAN");
    const kickmsg = new Discord.RichEmbed()
        .setTitle(`${message.author.tag} | Expulso`)
        .setDescription(`Você foi expulso do servidor **${message.guild.name}**! :worried:`)
        .setColor("#aa0303")
        .setThumbnail(member.user.displayAvatarURL)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        .setFooter("© Kally Moderação")
     
      
    const kikado = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Expulso`)
        .setDescription(`**${member.user.tag}** foi expulso do servidor! :worried:`)
        .setColor("#aa0303")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("👮 Por:", message.author)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        .setFooter("© Kally Moderação")
        
    if(message.guild.channels.find(ch => ch.name === "punidos")){
        let guild = message.guild.channels.find(ch => ch.name === "punidos");   
        guild.send(kikado).catch(O_o=>{});
        member.send(kickmsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    }else if(message.guild.channels.find(ch => ch.name === "🚫punidos")){
        let guild = message.guild.channels.find(ch => ch.name === "🚫punidos");
        guild.send(kikado).catch(O_o=>{});
        member.send(kickmsg).catch(O_o=>{})
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    } else if(message.guild.channels.find(ch => ch.name === "punições")){
        let guild = message.guild.channels.find(ch => ch.name === "punições");
        guild.send(kikado).catch(O_o=>{});
        member.send(kickmsg).catch(O_o=>{})
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    }else if(message.guild.channels.find(ch => ch.name === "🚫punições")){
        let guild = message.guild.channels.find(ch => ch.name === "🚫punições");
        guild.send(kikado).catch(O_o=>{});
        member.send(kickmsg).catch(O_o=>{})
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    } else {
        message.channel.send(kikado).catch(O_o=>{});
        member.send(kickmsg).catch(O_o=>{})
    }
}

exports.help = {
    name: "kick",
    aliases: [
        'expulsar'
    ]
}
