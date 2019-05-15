const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
      
      const emojicarregando = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyCarregando");
      message.channel.send(`${message.author}, irei mandar os convites no seu privado! ${emojicarregando}`).then(msg => msg.delete(6000));
      const convite = new Discord.RichEmbed()
        .setColor("#1297f0")
        .setAuthor("Convite", client.user.avatarURL)
        .addField("Convite para servidor de suporte do Kally:", "https://discord.gg/mxXHyN7")
        .addField("Invite para colocar o Kally no seu servidor:", "https://kally.glitch.me/invite")

      message.author.send(convite).catch(error => message.reply(`ops! Seu privado está desativado e não consigo enviar o convite. :worried:`).then(msg => msg.delete(8000)));
  

   
}

exports.help = {
  name: "convite",
  aliases: [
      'invite'
  ]
}
