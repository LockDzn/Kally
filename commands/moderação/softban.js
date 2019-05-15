const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) =>{

    message.delete().catch(O_o=>{});
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("você não tem permissão! :x:").then(msg => msg.delete(6000));
    const comousar = new Discord.RichEmbed()
        .setAuthor("Kally", client.user.avatarURL)
        .setTitle(`${prefix}softban`)
        .setDescription(`Irá banir e desbanir o usuário mencionado e deletar as mensagens dos últimos 7 dias desse usuário.`)
        .setColor("#60d1f6")
        .setFooter("© Kally - kally.glitch.me")
        .addField("Como usar", `\`${prefix}softban @usuário <motivo>\``)
        .addField("Permissão", 'O staff que for "banir" tem que está em um cargo com a permissão `Banir membros`')
    let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
    if(!member.bannable) 
        return message.reply('eu não posso "banir" esse usuário! Ele(a) têm um cargo maior.');
   
    let motivo = args.slice(1).join(' ');
    if(!motivo) motivo = "Não informado";
  
    message.guild.member(member).ban(7, `Banido por: ${message.author.tag} | Motivo: ${motivo}`);
    message.guild.unban(member.id).catch(O_o=>{});
      
      
    const emojizoioban = client.guilds.get("420316735149965322").emojis.find(em => em.name === "zoioBAN");
    const banmsg = new Discord.RichEmbed()
        .setTitle(`${message.author.tag} | Banido`)
        .setDescription(`Você foi banido do servidor **${message.guild.name}**! ${emojizoioban}`)
        .setColor("#aa0303")
        .setThumbnail(member.user.displayAvatarURL)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        .setFooter("© Kally Moderação")
     
      
    const banido = new Discord.RichEmbed()
        .setTitle(`${message.author.tag} | Banido`)
        .setDescription(`**${member.user.username}** foi banido do servidor! ${emojizoioban}`)
        .setColor("#aa0303")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("👮 Por:", message.author)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        .setFooter("© Kally Moderação")

    if(message.guild.channels.find(ch => ch.name === "punidos")){
        let guild = message.guild.channels.find(ch => ch.name === "punidos");   
        guild.send(banido).catch(O_o=>{});
        member.send(banmsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    }else if(message.guild.channels.find(ch => ch.name === "🚫punidos")){
        let guild = message.guild.channels.find(ch => ch.name === "🚫punidos");
        guild.send(banido).catch(O_o=>{});
        member.send(banmsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    } else if(message.guild.channels.find(ch => ch.name === "punições")){
        let guild = message.guild.channels.find(ch => ch.name === "punições");
        guild.send(banido).catch(O_o=>{});
        member.send(banmsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    }else if(message.guild.channels.find(ch => ch.name === "🚫punições")){
        let guild = message.guild.channels.find(ch => ch.name === "🚫punições");
        guild.send(banido).catch(O_o=>{});
        member.send(banmsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    } else {
        message.channel.send(banido)
        member.send(banmsg).catch(O_o=>{});
    } 
   
}

exports.help = {
    name: "softban",
}
