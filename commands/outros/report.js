const Discord = require('discord.js');

exports.run = async (client, message, args, prefix) => {
    
	message.delete().catch(O_o=>{});
	
    var canalReportes = false
    if(message.guild.channels.find(em => em.name === "⚠report")) canalReportes = true
    if(message.guild.channels.find(em => em.name === "report")) canalReportes = true
    if(message.guild.channels.find(em => em.name === "⚠reportes")) canalReportes = true
    if(message.guild.channels.find(em => em.name === "reportes")) canalReportes = true

    if(canalReportes == false) return message.reply(`o comando de report está desativado nesse servidor!\nPara o comando funcionar no servidor tem que ter um canal com um desses nomes: \`⚠report\`, \`report\`, \`⚠reportes\`, \`reportes\``)

    const comousar = new Discord.RichEmbed()
        .setAuthor("Kally", client.user.avatarURL)
        .setTitle(`${prefix}report`)
        .setDescription(`Irá reportar o usuário mencionado.`)
        .setColor("#22a7cc")
        .setFooter("© Kally - kally.glitch.me")
        .addField("Como usar:", `\`${prefix}report @usuário <motivo>\`\n\`${prefix}report @LockDzn#8368 Spam\``)


    if(args == "") return message.reply("você tem que mencionar um usuário. :face_palm:")
    var reportado = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!reportado) return message.reply("usuário não foi encontrado. :worried:")

    let motivo = args.slice(1).join(' ');
    if(!motivo) return message.reply("Você tem que digitar o motivo!")
    

    const reporteviado = new Discord.RichEmbed()
        .setTitle("⚠ Novo report")
        .setColor("#aa0303")
        .setThumbnail(reportado.user.avatarURL)
        .addField("📥 Reporte enviado por:", message.author)
        .addField(":bust_in_silhouette: Reportado:", reportado)
        .addField("📋 Motivo:", motivo)
        .addField(":hash: Canal:", message.channel)
        .setTimestamp()
        .setFooter("© Kally Report")


    if(message.guild.channels.find(ch => ch.name === "⚠report")){
        let canal = message.guild.channels.find(ch => ch.name === "⚠report");   
        canal.send(reporteviado).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário reportado com sucesso!`).then(msg => msg.delete(10000));
    }else if(message.guild.channels.find(ch => ch.name === "report")){
        let canal = message.guild.channels.find(ch => ch.name === "report");
        canal.send(reporteviado).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário reportado com sucesso!`).then(msg => msg.delete(10000));
    } else if(message.guild.channels.find(ch => ch.name === "⚠reportes")){
        let canal = message.guild.channels.find(ch => ch.name === "⚠reportes");
        canal.send(reporteviado).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário reportado com sucesso!`).then(msg => msg.delete(10000));
    }else if(message.guild.channels.find(ch => ch.name === "reportes")){
        let canal = message.guild.channels.find(ch => ch.name === "reportes");
        canal.send(reporteviado).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário reportado com sucesso!`).then(msg => msg.delete(10000));
    }
}


exports.help = {
    name: "report",
    aliases: [
        'reportar'
    ]
}
