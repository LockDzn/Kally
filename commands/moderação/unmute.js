const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) =>{

    message.delete().catch(O_o=>{});
    const emojinop = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyNop");
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`você não tem permissão! ${emojinop}`).then(msg => msg.delete(6000));
    const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle(`${prefix}unmute`)
      .setDescription(`Irá desmutar o usuário mencionado.`)
      .setColor("#22a7cc")
      .setFooter("© Kally - kally.glitch.me")
      .addField("Como usar:", `\`${prefix}unmute @usuário\`\n\`${prefix}unmute @LockDzn#8368\``)
      .addField("Permissão:", "O staff que for mutar tem que esta em um cargo com a permissão `Gerenciar Mensagens`")
    let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));


  
    let muterole = message.guild.roles.find(ro => ro.name === "Mutado");
    if(!muterole){
        try {
            muterole = await message.guild.createRole({
                name: "Mutado",
                color: "#000000",
                permissions: []
            });
            message.guild.channels.forEach(async (channel, id) =>{
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTION: false,
                    CONNECT: false
                });
            });
        } catch (a) {
            console.error(a.stack);
        }
    }
    
    member.removeRole(muterole)

    const emojizoioban = client.guilds.get("420316735149965322").emojis.find(em => em.name === "zoioBAN");
    const desmutemsg = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Desmutado`)
        .setDescription(`Você foi desmutado no servidor **${message.guild.name}**! :smiley:`)
        .setColor("#aa0303")
        .setThumbnail(member.user.displayAvatarURL)
        .setTimestamp()
        .setFooter("© Kally Moderação")
     
      
    const desmutado = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Desmutado`)
        .setDescription(`**${member.user.tag}** foi desmutado no servidor! :smiley:`)
        .setColor("#aa0303")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("👮 Por:", message.author)
        .setTimestamp()
        .setFooter("© Kally Moderação")
        
    if(message.guild.channels.find(ch => ch.name === "punidos")){
        let guild = message.guild.channels.find(ch => ch.name === "punidos");   
        guild.send(desmutado).catch(O_o=>{});
        member.send(desmutemsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário despunido com sucesso!`)
    }else if(message.guild.channels.find(ch => ch.name === "🚫punidos")){
        let guild = message.guild.channels.find(ch => ch.name === "🚫punidos");
        guild.send(desmutado).catch(O_o=>{});
        member.send(desmutemsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário despunido com sucesso!`)
    } else if(message.guild.channels.find(ch => ch.name === "punições")){
        let guild = message.guild.channels.find(ch => ch.name === "punições");
        guild.send(desmutado).catch(O_o=>{});
        member.send(desmutemsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário despunido com sucesso!`)
    }else if(message.guild.channels.find(ch => ch.name === "🚫punições")){
        let guild = message.guild.channels.find(ch => ch.name === "🚫punições");
        guild.send(desmutado).catch(O_o=>{});
        member.send(desmutemsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário despunido com sucesso!`)
    } else {
        message.channel.send(desmutado).catch(O_o=>{});
        member.send(desmutemsg).catch(O_o=>{});
    }
}

exports.help = {
    name: "unmute",
    aliases: [
        'desmutar'
    ]
}
