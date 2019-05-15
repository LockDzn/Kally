const Discord = require("discord.js");

    /** TEMPLATE
    if(member.guild.id == "470729160650784788"){ // SERVIDOR DE TESTE
        const saiu = new Discord.RichEmbed()
            .setTitle(`Tchau 👋 :worried:`)
            .setDescription(`**__${member.user.username}__** saiu de nosso servidor.`)
            .setThumbnail(member.user.avatarURL)
            .setFooter("© Kally Parceiro")
            .setTimestamp()

        member.guild.channels.get("470729318696222743").send(saiu)

    } // FIM */

module.exports = async (member, client) => {

    if(member.guild.id == "420316735149965322"){ // Kally
       const saiu = new Discord.RichEmbed()
          .setTitle(`Tchau 👋 😟`)
          .setDescription(`**__${member.user.username}__** saiu do servidor.`)
          .setThumbnail(member.user.displayAvatarURL)
          .setFooter("© Kally Parceiro")
          .setTimestamp()

       member.guild.channels.get("430142996051263490").send(saiu)

    } // FIM
    if(member.guild.id == "486592941704347651"){ // SMASTHMC
        const saiu = new Discord.RichEmbed()
            .setTitle(`Tchau 👋 😟`)
            .setDescription(`**__${member.user.username}__** saiu do servidor.`)
            .setThumbnail(member.user.displayAvatarURL)
            .setFooter("© Kally Parceiro")
            .setTimestamp()

        member.guild.channels.get("486594640158392360").send(saiu)

    } // FIM */
    

}
