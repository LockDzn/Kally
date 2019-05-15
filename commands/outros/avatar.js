const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   let member = message.mentions.members.first();
   
   if(member) {
     
   const avatar = new Discord.RichEmbed()
      
      .setTitle("🖼 Avatar de " + `${member.user.username}`)
      .setDescription(`**Clique [aqui](${member.user.displayAvatarURL}) para baixar a imagem!**`)
      .setImage(member.user.displayAvatarURL)
      .setColor("#00a4ce")
      .setFooter("© Kally")
   
      message.channel.send(avatar)
   
   } else {
      
   const avatar = new Discord.RichEmbed()
      .setTitle("🖼 Avatar de " + `${message.author.username}`)
      .setDescription(`**Clique [aqui](${message.author.displayAvatarURL}) para baixar a imagem!**`)
      .setImage(message.author.displayAvatarURL)
      .setColor("#00a4ce")
      .setFooter("© Kally")
   
      message.channel.send(avatar)
      
   }
}

exports.help = {
    name: "avatar",
    aliases: [
        'foto'
    ]
}