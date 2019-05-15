const Discord = require("discord.js");
module.exports.run = async (client, message, args, prefix) =>{

    const emojinop = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyNop");
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(`você não tem permissão! ${emojinop}`).then(msg => msg.delete(5000));
    message.delete().catch(O_o=>{});
    const mutarcanalmsg = new Discord.RichEmbed()
        .setTitle("Mutar ou desmutar...")
        .setDescription(`Para mutar esse canal reaja com :mute:\nPara desmutar reaja com :loud_sound:\nPara mais informações reaja com :question:`)
        .setColor("#60d1f6")
        .setFooter(`© Kally - Canal: ${message.channel.name}`)
    let mensg = args.join(" ");
    if(!mensg){
        message.channel.send(mutarcanalmsg).then(msg=> {
            msg.react("🔇").then(r => {
                msg.react("🔊")
                msg.react("❓")
                msg.delete(78000).catch(O_o=>{});

                const podemutar = (reaction, user) => reaction.emoji.name === '🔇' && user.id === message.author.id;
                const podedesmutar = (reaction, user) => reaction.emoji.name === '🔊' && user.id === message.author.id;
                const info = (reaction, user) => reaction.emoji.name === '❓' && user.id === message.author.id;
    
                const podemutarL = msg.createReactionCollector(podemutar, { time: 60000 });
                const podedesmutarL = msg.createReactionCollector(podedesmutar, { time: 60000 });
                const infoL = msg.createReactionCollector(info, { time: 60000 });
                
    
                podemutarL.on('collect', r=> {
                    msg.delete();
                    let role = message.guild.roles.find(ro => ro.name === "@everyone");
                    message.channel.overwritePermissions(role, {SEND_MESSAGES: false});
                    message.channel.send(`Canal **mutado** por: ${message.author}`)
                    return;
                })
                podedesmutarL.on('collect', r=> {
                    msg.delete();
                    let role = message.guild.roles.find(ro => ro.name === "@everyone");
                    message.channel.overwritePermissions(role, {SEND_MESSAGES: true});
                    message.channel.send(`Canal **desmutado** por: ${message.author}`)
                    return;
                })
                infoL.on('collect', r=> {
                    msg.delete();
                    const comousar = new Discord.RichEmbed()
                        .setAuthor("Kally", client.user.avatarURL)
                        .setTitle(`${prefix}chat`)
                        .setDescription(`Irá mutar ou desmutar o chat.`)
                        .setColor("#22a7cc")
                        .setFooter("© Kally - kally.glitch.me")
                        .addField("Como usar:", `\`${prefix}chat <on/off>\``)
                        .addField("Permissão:", "O staff que for usar o comando tem que esta em um cargo com a permissão `Gerenciar mensagens`")
                    message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
                })
            })
        }).catch(O_o=>{});
    }
    if(mensg){
        if(args[0] == "OFF" || args[0] == "off"){
            let role = message.guild.roles.find(ro => ro.name === "@everyone");
            message.channel.overwritePermissions(role, {SEND_MESSAGES: false});
            message.channel.send(`Canal **mutado** por: ${message.author}`)
            return;
        }else if(args[0] == "ON" || args[0] == "on"){
            let role = message.guild.roles.find(ro => ro.name === "@everyone");
            message.channel.overwritePermissions(role, {SEND_MESSAGES: true});
            message.channel.send(`Canal **desmutado** por: ${message.author}`)
            return;
        } else{
        message.reply("por favor use assim: `!chat off` ou `!chat on`!").then(msg => msg.delete(8000));
        }
    }
    
    
 }

exports.help = {
    name: "chat",
    aliases: [
        'mutarchat'
    ]
}
