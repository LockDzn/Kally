const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) =>{
   
   if(message.guild.id !== "420316735149965322") return message.channel.send(`:question: **|** ${message.author} comando inexistente, para saber todos meus comandos digite **${prefix}ajuda**`).then(msg => msg.delete(5000));
   if(!message.member.roles.some(r=>["⚒ Desenvolvedor", "🔧 Staff", "👊 Parceiro", "🌟 Membro ativo"].includes(r.name))) return message.reply("você não tem permissão! :x:").then(msg => msg.delete(6000));
   message.delete().catch(O_o=>{});
   const emojicor1 = client.guilds.get("418902107391918080").emojis.find(em => em.name === "emojiCor1");
   const emojicor2 = client.guilds.get("418902107391918080").emojis.find(em => em.name === "emojiCor2");
   const emojicor3 = client.guilds.get("418902107391918080").emojis.find(em => em.name === "emojiCor3");
   const emojicor4 = client.guilds.get("418902107391918080").emojis.find(em => em.name === "emojiCor4");
   let role1 = message.guild.roles.get("453629192748138527");
   let role2 = message.guild.roles.get("453629825920532480");
   let role3 = message.guild.roles.get("458718075693432834");
   let role4 = message.guild.roles.get("430908852196737034");
   const categoria = new Discord.RichEmbed()
    .setTitle("Escolha uma cor...")
    .setDescription(`\n\n${emojicor1} **Cor azul**\n${emojicor2} **Cor amarela**\n${emojicor3} **Cor vermelha**\n${emojicor4} **Cor Roxa**\n\n*Por favor escolha uma cor só!*\n*Se quiser retirar uma cor, só reagir a mesma!*`)
    .setColor("#36393e")
    .setFooter(`Por: ${message.author.tag}`, message.author.avatarURL)
   const emojicarregando = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyCarregando");
   message.author.send(categoria).then(msg=> {
    msg.react(emojicor1).then(r => {
        msg.react(emojicor2)
        msg.react(emojicor3)
        msg.react(emojicor4)
    
        const num1 = (reaction, user) => reaction.emoji.name === `${emojicor1.name}` && user.id === message.author.id;
        const num2 = (reaction, user) => reaction.emoji.name === `${emojicor2.name}` && user.id === message.author.id;
        const num3 = (reaction, user) => reaction.emoji.name === `${emojicor3.name}` && user.id === message.author.id;
        const num4 = (reaction, user) => reaction.emoji.name === `${emojicor4.name}` && user.id === message.author.id;

        const num1l = msg.createReactionCollector(num1, { time: 60000 });
        const num2l = msg.createReactionCollector(num2, { time: 60000 });
        const num3l = msg.createReactionCollector(num3, { time: 60000 });
        const num4l = msg.createReactionCollector(num4, { time: 60000 });

        num1l.on('collect', r=> {
            msg.delete();
            if(message.member.roles.some(r=>[role1.id].includes(r.id))){
                message.author.send(`Você já tinha o cargo ${emojicor1}! ${emojicarregando}`)
                message.member.removeRole(role1)
                message.author.send(`Cargo retirado!`)
                return;
            }
            message.author.send(`Você escolheu a cor ${emojicor1}! ${emojicarregando}`)
            message.member.addRole(role1)
            message.author.send(`Cargo setado!`)
        })
        num2l.on('collect', r=> {
            msg.delete();
            if(message.member.roles.some(r=>[role2.id].includes(r.id))){
                message.author.send(`Você já tinha o cargo ${emojicor2}! ${emojicarregando}`)
                message.member.removeRole(role2)
                message.author.send(`Cargo retirado!`)
                return;
            }
            message.author.send(`Você escolheu a cor ${emojicor2}! ${emojicarregando}`)
            message.member.addRole(role2)
            message.author.send(`Cargo setado!`)
        })
        num3l.on('collect', r=> {
            msg.delete();
            if(message.member.roles.some(r=>[role3.id].includes(r.id))){
                message.author.send(`Você já tinha o cargo ${emojicor3}! ${emojicarregando}`)
                message.member.removeRole(role3)
                message.author.send(`Cargo retirado!`)
                return;
            }
            message.author.send(`Você escolheu a cor ${emojicor3}! ${emojicarregando}`)
            message.member.addRole(role3)
            message.author.send(`Cargo setado!`)
        })
        num4l.on('collect', r=> {
            msg.delete();
            if(message.member.roles.some(r=>[role4.id].includes(r.id))){
                message.author.send(`Você já tinha o cargo ${emojicor4}! ${emojicarregando}`)
                message.member.removeRole(role4)
                message.author.send(`Cargo retirado!`)
                return;
            }
            message.author.send(`\nVocê escolheu a cor ${emojicor4}! ${emojicarregando}`)
            message.member.addRole(role4)
            message.author.send(`Cargo setado!`)
        })
    })
    })
   
   
   
   
   
}

exports.help = {
    name: "cor",
}
