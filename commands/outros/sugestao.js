const Discord = require('discord.js');

exports.run = async (client, message, args, prefix) => {
    

    var canalSugestões = false
    if(message.guild.channels.find(ch => ch.name === "💭sugestões")) canalSugestões = true
    if(message.guild.channels.find(ch => ch.name === "💭sugestão")) canalSugestões = true
    if(message.guild.channels.find(ch => ch.name === "sugestões")) canalSugestões = true
    if(message.guild.channels.find(ch => ch.name === "sugestão")) canalSugestões = true

    if(canalSugestões == false) return message.reply(`o comando de sugestões está desativado nesse servidor!\nPara o comando funcionar no servidor tem que ter um canal com um desses nomes: \`💭sugestões\`, \`sugestões\`, \`💭sugestão\`, \`sugestão\``)

    const comousar = new Discord.RichEmbed()
        .setAuthor("Kally", client.user.avatarURL)
        .setTitle(`${prefix}sugestão`)
        .setDescription(`Irá mandar uma sugestão para o servidor.`)
        .setColor("#22a7cc")
        .setFooter("© Kally - kally.glitch.me")
        .addField("Como usar:", `\`${prefix}sugestão <sua sugestão>\``)


    let suges = args.join(' ');
    if(!suges) return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));

    message.delete().catch(O_o=>{});
    const sugeseviado = new Discord.RichEmbed()
        .setTitle(":incoming_envelope: Nova sugestão")
        .setColor("#3eda50")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("📥 Quem enviou:", message.author)
        .addField("📋 Sugestão:", suges)
        .setTimestamp()
        .setFooter("© Kally Sugestão")


    if(message.guild.channels.find(ch => ch.name === "💭sugestões")){
        let canal = message.guild.channels.find(ch => ch.name === "💭sugestões");   
        canal.send(sugeseviado).then(msg=> {
            msg.react("👍").then(r => {
            msg.react("👎")
            })})
        message.channel.send(`:white_check_mark: | ${message.author} sua sugestão foi enviada!`).then(msg => msg.delete(10000));
    }else if(message.guild.channels.find(ch => ch.name === "💭sugestão")){
        let canal = message.guild.channels.find(ch => ch.name === "💭sugestão");
        canal.send(sugeseviado).then(msg=> {
            msg.react("👍").then(r => {
            msg.react("👎")
            })})
        message.channel.send(`:white_check_mark: | ${message.author} sua sugestão foi enviada!`).then(msg => msg.delete(10000));
    } else if(message.guild.channels.find(ch => ch.name === "sugestões")){
        let canal = message.guild.channels.find(ch => ch.name === "sugestões");
        canal.send(sugeseviado).then(msg=> {
            msg.react("👍").then(r => {
            msg.react("👎")
            })})
        message.channel.send(`:white_check_mark: | ${message.author} sua sugestão foi enviada!`).then(msg => msg.delete(10000));
    }else if(message.guild.channels.find(ch => ch.name === "sugestão")){
        let canal = message.guild.channels.find(ch => ch.name === "sugestão");
        canal.send(sugeseviado).then(msg=> {
            msg.react("👍").then(r => {
            msg.react("👎")
            })})
        message.channel.send(`:white_check_mark: | ${message.author} sua sugestão foi enviada!`).then(msg => msg.delete(10000));
    }

}

exports.help = {
    name: "sugestao",
    aliases: [
        'sugest',
        'sugestão'
    ]
}
