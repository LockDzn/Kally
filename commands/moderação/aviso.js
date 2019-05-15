const Discord = require("discord.js");
const fs = require("fs");
let warns = require("../../util/warnings.json");


module.exports.run = async (client, message, args, prefix) =>{

    message.delete().catch(O_o=>{});
    const emojinop = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyNop");
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`você não tem permissão! ${emojinop}`).then(msg => msg.delete(6000));
    const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle(`${prefix}aviso`)
      .setDescription(`Irá avisar um usuário. No 1º aviso o usuário sai ser avisado e no 2º aviso o usuário sera mutado.`)
      .setColor("#22a7cc")
      .setFooter("© Kally - kally.glitch.me")
      .addField("Como usar:", `\`${prefix}aviso @usuário <motivo>\`\n\`${prefix}aviso @LockDzn#8368 Spam\``)
      .addField("Permissão:", "O staff que for avisar tem que está em um cargo com a permissão `Gerenciar mensagens`")
    let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));

    let motivo = args.slice(1).join(' ');
    if(!motivo) motivo = "Não informado";
  
    if(!warns[`${member.user.id}-${message.guild.id}`]) warns[`${member.user.id}-${message.guild.id}`] = {
        warns: 0
    };
     
    warns[`${member.user.id}-${message.guild.id}`].warns++;

    
    fs.writeFile("./util/warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
    });
      
    const avisomsg = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Aviso`)
        .setDescription(`Você foi avisado no servidor **${message.guild.name}**! Cuidado!!`)
        .setColor("#aa0303")
        .setThumbnail(member.user.displayAvatarURL)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        .setFooter("© Kally Moderação")
     
      
    const aviso = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} | Aviso`)
        .setDescription(`**${member.user.tag}** foi avisado!\nNúmero de avisos: ${warns[`${member.user.id}-${message.guild.id}`].warns}`)
        .setColor("#aa0303")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("👮 Por:", message.author)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        .setFooter("© Kally Moderação - k!convite")


    if(warns[`${member.user.id}-${message.guild.id}`].warns == 2){
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

        member.addRole(muterole)
        warns[`${member.user.id}-${message.guild.id}`] = {
            warns: 0
        };

    }

    fs.writeFile("./util/warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
    });

    if(message.guild.channels.find(ch => ch.name === "punidos")){
        let guild = message.guild.channels.find(ch => ch.name === "punidos");   
        guild.send(aviso).catch(O_o=>{});
        member.user.send(avisomsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    }else if(message.guild.channels.find(ch => ch.name === "🚫punidos")){
        let guild = message.guild.channels.find(ch => ch.name === "🚫punidos");
        guild.send(aviso).catch(O_o=>{});
        member.user.send(avisomsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    } else if(message.guild.channels.find(ch => ch.name === "punições")){
        let guild = message.guild.channels.find(ch => ch.name === "punições");
        guild.send(aviso).catch(O_o=>{});
        member.user.send(avisomsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    }else if(message.guild.channels.find(ch => ch.name === "🚫punições")){
        let guild = message.guild.channels.find(ch => ch.name === "🚫punições");
        guild.send(aviso).catch(O_o=>{});
        member.user.send(avisomsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    } else {
        message.channel.send(aviso).catch(O_o=>{});
        member.user.send(avisomsg).catch(O_o=>{});
    }
}

exports.help = {
    name: "aviso",
    aliases: [
        'warn'
    ]
}
