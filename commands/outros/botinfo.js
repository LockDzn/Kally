const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args, prefix) =>{
   
   const dono = client.users.get("244537374258888725");
   
    var date = new Date(client.uptime);
    var uptime = '';
   
   const d = uptime += date.getUTCDate() - 1 + 'd, ';
   const h = uptime += date.getUTCHours() + 'h, ';
   const m = uptime += date.getUTCMinutes() + 'm, ';
   const s = uptime += date.getUTCSeconds() + 's';

   const emojijs = client.guilds.get("420316735149965322").emojis.find(em => em.name === "javascript");
   const emojidiscordjs = client.guilds.get("420316735149965322").emojis.find(em => em.name === "discordjs");

   const info = new Discord.RichEmbed()
      .setColor("#0092ca")
      .setAuthor(client.user.username, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)

   
      .setDescription(`Olá, me chamo Kally, sou um :mens: **menino**, sou focado na moderação dos servidores do discord, meu prefix nesse servidor é \`${prefix}\`.\n\nEstou em **${client.guilds.size.toLocaleString()} servidores** do discord. \nFui feito em ${emojijs} [**JavaScript**](https://www.javascript.com/) usando ${emojidiscordjs} [**Discord.js**](https://discord.js.org/).
\nFazem **` + s + `** que eu estou acordado (ou seja, meu uptime atual) :zzz:\n \nUse **k!ajuda** para saber meus comandos!`)
   
      .addField(":question: Suporte", `https://discord.gg/mxXHyN7`)
      .addField(":computer: Site", `https://kally.glitch.me`)
      .addField("De um :thumbsup: voto para o Kally:", `https://bots.perfectdreams.net/bot/415288373071183872/vote`)
      .addField(":heart: Criador", `\`LockDzn#8368\` Foi ele que me criou! Twitter dele é [@LockDzn_](https://twitter.com/intent/user?screen_name=@LockDzn_)`)
      .setFooter("bit.ly/LockDzn", dono.avatarURL)
   
   message.channel.send(info).then(msg=> {
      msg.react("431203369751937055").then(r => {
      
          const botstatus = (reaction, user) => reaction.emoji.id === '431203369751937055' && user.id === message.author.id;

          const botstatusL = msg.createReactionCollector(botstatus, { time: 600000 });

          botstatusL.on('collect', r=> {
                  msg.delete()
                  // BOTSTATUS
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
          })
      })
  })
   
}

exports.help = {
      name: "botinfo",
      aliases: [
          'info',
          'kally'
      ]
  }
