const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) =>{

    message.delete().catch(O_o=>{});
    const emojinop = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyNop");
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.reply("você não tem permissão! "+ emojinop).then(msg => msg.delete(10000));
    let kallyrole = message.guild.roles.find(ro => ro.name === "Kally");
    const comousar = new Discord.RichEmbed()
        .setAuthor("Kally", client.user.avatarURL)
        .setTitle(`${prefix}say`)
        .setDescription(`Irá mandar um mensagem em embed.`)
        .setColor("#22a7cc")
        .setFooter("© Kally - kally.glitch.me")
        .addField("Como usar:", `\`${prefix}say <mensagem>\`\n\`${prefix}say #canal <mensagem>\`\n\`${prefix}say Olá\`\n\`${prefix}say #chat Oiee\``)
        .addField("Permissão:", "Quem for usar o comando tem que esta em um cargo com a permissão `Gerenciar mensagens`")
        .addField("Como mudar a cor do say:", "Simples, para escolher a cor do anúncio só você mudar a cor do cargo **"+ kallyrole +"** (O cargo do Kally), se quiser uma cor aleatória só deixar na cor"+` "Padrão."`)   
    let canal = message.mentions.channels.first();
    let mensg = args.join(" ");

    if(!canal) {
        canal = message.channel
    }else {
        mensg = args.slice(1).join(" ");
    }
    
    const permissions = canal.permissionsFor(message.client.user);
    
    if(!permissions.has('SEND_MESSAGES')) {
        return message.reply(`eu não tenho permissão para falar no canal **${message.member.voiceChannel.name}** :worried: `)
    }
    if(!permissions.has('EMBED_LINKS')) {
        return message.reply(`eu não tenho permissão de enviar links no canal **${message.member.voiceChannel.name}** (Permissão de enviar link igual a de enviar embed) :worried: `)
    }

    if(!mensg)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
    
    if(!message.guild.roles.find(ro => ro.name === "Kally")) {
        const emojiaviso = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyAviso");
        const anuncio = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
            
            .setDescription(mensg)
            
            .setTimestamp()
            .setFooter(`© Kally`)

        canal.send(anuncio)
        return;
    }
    if(kallyrole.color == "0"){
            const emojiaviso = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyAviso");
            const anuncio = new Discord.RichEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                
                .setDescription(mensg)
                
                .setTimestamp()
                .setFooter(`© Kally`)

            canal.send(anuncio)
        }else{
            const emojiaviso = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyAviso");
            const anuncio = new Discord.RichEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .setColor(kallyrole.color)

                .setDescription(mensg)
                
                .setTimestamp()
                .setFooter(`© Kally`)

            canal.send(anuncio)
            return;
        }   
}

exports.help = {
    name: "say",
    aliases: [
        'falar',
        'embed'
    ]
}
