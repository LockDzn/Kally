const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    var date = new Date(client.uptime);
    var uptime = '';
    
    const d = uptime += date.getUTCDate() - 1 + 'd, ';
    const h = uptime += date.getUTCHours() + 'h, ';
    const m = uptime += date.getUTCMinutes() + 'm, ';
    const s = uptime += date.getUTCSeconds() + 's';
    
    const emojiKally = client.guilds.get("420316735149965322").emojis.find(em => em.name === "Kally");
    const emojidiscordjs = client.guilds.get("420316735149965322").emojis.find(em => em.name === "discordjs");
    const emojinode = client.guilds.get("420316735149965322").emojis.find(em => em.name === "nodejs");

    const botstatus = new Discord.RichEmbed()
        .setColor('#3498db')
        .setTitle(`${emojiKally} Status do Kally`, client.user.displayAvatarURL)
        .setDescription(`:computer: Uso de memória: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**
:computer: Uso do CPU: **${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%**
${emojidiscordjs} Versão do discord.js: **v${Discord.version}**
${emojinode} Versão do node.js: **${process.version}**
:stopwatch: Uptime: **${s}**
:busts_in_silhouette: Usuários: **${client.users.size.toLocaleString()}**
:cityscape: Servidores: **${client.guilds.size.toLocaleString()}**`)
    
        .setColor('#3498db')
    message.channel.send(message.author, botstatus);
      
}

exports.help = {
    name: "botstatus",
    aliases: [
        'status',
        'stats'
    ]
}
