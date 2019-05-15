const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) =>{

   message.delete().catch(O_o=>{});
   const emojinop = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyNop");
   if (!message.member.hasPermission('MANAGE_GUILD'))
      return message.reply("você não tem permissão! "+ emojinop).then(msg => msg.delete(10000));
   let kallyrole = message.guild.roles.find(ro => ro.name === "Kally");
   const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle(`${prefix}anuncio`)
      .setDescription(`Irá mandar um anúncio no chat que o comando foi executado.`)
      .setColor("#22a7cc")
      .setFooter("© Kally - kally.glitch.me")
      .addField("Como usar:", `\`${prefix}anuncio <mensagem do anúncio>\``)
      .addField("Permissão:", "O staff que for usar o comando tem que esta em um cargo com a permissão `Gerenciar servidor`")
      .addField("Como mudar a cor do anúncio:", "Simples, para escolher a cor do anúncio só você mudar a cor do cargo **"+ kallyrole +"** (O cargo do Kally), se quiser uma cor aleatória só deixar na cor"+` "Padrão."`)   
      
   let mensg = args.join(" ");
   if(!mensg)
      return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
   if(!message.guild.roles.find(ro => ro.name === "Kally")) {
        const emojiaviso = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyAviso");
        const anuncio = new Discord.RichEmbed()
            .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
            .setTitle(`${emojiaviso} ANÚNCIO`)
            
            .setDescription(mensg)
            
            .setTimestamp()
            .setFooter(`Por: ${message.author.tag} - © Kally`, message.author.avatarURL)

        // Sistema segurança
        message.channel.send(`:warning: **|** ${message.author}, **CALMA AÍ!** Ao enviar o anúncio você vai mencionar mais de **${message.guild.memberCount}** pessoas. Para confirmar, clique no :white_check_mark:`).then(msg=> {
            msg.react("✅").then(r => {
                msg.react("❎")
               
                msg.delete(60000).catch(O_o=>{});
            
                const sim = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
                const nao = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
    
                const siml = msg.createReactionCollector(sim, { time: 60000 });
                const naol = msg.createReactionCollector(nao, { time: 60000 });
    
                siml.on('collect', r=> {
                    msg.delete().catch(O_o=>{});
                    message.channel.send("@everyone", anuncio)
                })
                naol.on('collect', r=> {
                    msg.delete().catch(O_o=>{});
                    message.reply("anúncio cancelado!").then(msgr => msgr.delete(8000));
                })
            })
        })
        return;
    }
    if(kallyrole.color == "0"){
            const emojiaviso = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyAviso");
            const anuncio = new Discord.RichEmbed()
                .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
                .setTitle(`${emojiaviso} ANÚNCIO`)
                
                .setDescription(mensg)
                
                .setTimestamp()
                .setFooter(`Por: ${message.author.tag} - © Kally`, message.author.avatarURL)
            
            // Sistema segurança
            message.channel.send(`:warning: **|** ${message.author}, **CALMA AÍ!** Ao enviar o anúncio você vai mencionar mais de **${message.guild.memberCount}** pessoas. Para confirmar, clique no :white_check_mark:`).then(msg=> {
                msg.react("✅").then(r => {
                    msg.react("❎")
                
                    msg.delete(60000).catch(O_o=>{});
                   
                    const sim = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
                    const nao = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
        
                    const siml = msg.createReactionCollector(sim, { time: 60000 });
                    const naol = msg.createReactionCollector(nao, { time: 60000 });
        
                    siml.on('collect', r=> {
                        msg.delete().catch(O_o=>{});
                        message.channel.send("@everyone", anuncio)
                    })
                    naol.on('collect', r=> {
                        msg.delete().catch(O_o=>{});
                        message.reply("anúncio cancelado!").then(msgr => msgr.delete(8000));
                    })
                })
            })
        }else{
            const emojiaviso = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyAviso");
            const anuncio = new Discord.RichEmbed()
                .setColor(kallyrole.color)
                .setTitle(`${emojiaviso} ANÚNCIO`)
                
                .setDescription(mensg)
                
                .setTimestamp()
                .setFooter(`Por: ${message.author.tag} - © Kally`, message.author.avatarURL)

            // Sistema segurança
            message.channel.send(`:warning: **|** ${message.author}, **CALMA AÍ!** Ao enviar o anúncio você vai mencionar mais de **${message.guild.memberCount}** pessoas. Para confirmar, clique no :white_check_mark:`).then(msg=> {
                msg.react("✅").then(r => {
                    msg.react("❎")
                   
                    msg.delete(60000).catch(O_o=>{});
                
                    const sim = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
                    const nao = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
        
                    const siml = msg.createReactionCollector(sim, { time: 60000 });
                    const naol = msg.createReactionCollector(nao, { time: 60000 });
        
                    siml.on('collect', r=> {
                        msg.delete().catch(O_o=>{});
                        message.channel.send("@everyone", anuncio)
                    })
                    naol.on('collect', r=> {
                        msg.delete().catch(O_o=>{});
                        message.reply("anúncio cancelado!").then(msgr => msgr.delete(8000));
                    })
                })
            })
            return;
        }   
}

exports.help = {
    name: "anuncio",
    aliases: [
        'anunciar'
    ]
}
