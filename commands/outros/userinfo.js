const Discord = require("discord.js");
const dateFormat = require('dateformat');
const moment = require('moment'); 
      moment.locale('pt-BR');


module.exports.run = async (client, message, args, prefix) =>{

    var member = message.mentions.members.first();
    if(!member) member = message.member

    var cargos = member.roles.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(", ") || "\`Sem cargo\`"
    const info = new Discord.RichEmbed()

        .setTitle(`👤 Informações de ${member.user.username}`)
        .setThumbnail(member.user.displayAvatarURL)
        .addField('💻 ID:', member.user.id)
        .addField("🎮 Jogando:", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Não está jogando."}`)
        .addField('💼 Cargos:', cargos)
        .addField('📥 Entrou nesse servidor em:', `${moment(member.joinedAt).format('LLL')}`)
        .addField('📥 Conta criada em:', `${moment(member.user.createdAt).format('LLL')}`)
        .setColor("#00a4ce")
        .setFooter("© Kally")
   
    message.channel.send(info)
   
}

exports.help = {
    name: "userinfo",
}
