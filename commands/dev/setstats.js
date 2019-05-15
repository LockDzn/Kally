module.exports.run = async (client, message, args) =>{

    let arg = args.join(" ");
    if(message.member.id == "244537374258888725") {
      var date = new Date(client.uptime);
      var uptime = '';
   
      const d = uptime += date.getUTCDate() - 1 + 'd, ';
      const h = uptime += date.getUTCHours() + 'h, ';
      const m = uptime += date.getUTCMinutes() + 'm, ';
      const s = uptime += date.getUTCSeconds() + 's';
        
      if(arg == "off"){
        client.user.setStatus("invisible");
        message.reply("agora eu estou offline")
      }
      if(arg == "on"){
        client.user.setStatus("online");
        message.reply("agora eu estou online")
      }
      if(arg == "1"){
        client.user.setPresence({ game: { name: 'kally.glitch.me | k!ajuda', type: 0 } });
        message.reply("status setado para `kally.glitch.me | k!ajuda`")
      }
      if(arg == "2"){
        client.user.setPresence({ game: { name: 'entre no meu servidor de suporte https://discord.gg/mxXHyN7', url: 'https://twitch.tv/LockDzn', type: 1 } });
        message.reply("status setado para `entre no meu servidor de suporte https://discord.gg/fsSNJJH`")
      }
      if(arg == "3"){
        client.user.setPresence({ game: { name: `estou acordado a ${s}`, url: 'https://twitch.tv/LockDzn', type: 1 } });
        message.reply("status setado para estou acordado a (meu uptime atual)`")
      }
   }       
}

exports.help = {
  name: "setstats",
  aliases: [
      'setstatus'
  ]
}
