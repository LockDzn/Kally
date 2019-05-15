const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   if(message.author.id === "244537374258888725"){
    message.delete().catch(O_o=>{});
    let servidor = args[0]
    if(!servidor) return message.reply("por favor, digite o ID do servidor!")

    let guild = client.guilds.find(gd => gd.id === servidor);
    if(!guild)
        return message.reply("por favor, digite um ID valido, o servidor não existe!")

    const remover = new Discord.RichEmbed()
        .setAuthor("Remover bot!", client.user.avatarURL)
        .setDescription(`Você realmente quer me tirar do servidor \`${guild.name}\` - \`${guild.id}\`?`)
        .setTimestamp()
        .setFooter(`© Kally`, message.author.avatarURL)
    
    message.channel.send(`:warning: **|** ${message.author}, você realmente quer me remover do servidor \`${guild.name}\` - \`${guild.id}\`?`).then(msg=> {
        msg.react("✅").then(r => {
            msg.react("❎")
        
            const sim = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
            const nao = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

            const siml = msg.createReactionCollector(sim, { time: 60000 });
            const naol = msg.createReactionCollector(nao, { time: 60000 });

            siml.on('collect', r=> {
                msg.delete();
                message.channel.send(`:white_check_mark: **|** ${message.author}, sai do servidor \`${guild.name}\` (\`${guild.id}\`)!`)
            
                client.channels.get("458341973955313675").send(`**Removido por ${message.author}!**`);
                guild.leave()
            })
            naol.on('collect', r=> {
                msg.delete();
                message.channel.send(`:negative_squared_cross_mark: **|** ${message.author}, você cancelou a minha remoção do servidor \`${guild.name}\` (\`${guild.id}\`)!`)
            })
        })
    })
   }
}

exports.help = {
    name: "removerbot",
    aliases: [
        'removebot'
    ]
}

