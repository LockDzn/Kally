const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    
    message.delete(60000)
    let bot = client
    let msg = message
    try {
        var code = args.join(" ");
        if(!code) return message.reply("você tem que digitar o codigo que eu vou executar!")
        if(code == "process.env.BOT_TOKEN") return message.reply("você não pode fazer isso.")
        var evaled = eval(code);
  
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
        const executado = new Discord.RichEmbed()
            .setColor("#1fec4f")
            .setTitle("Resultado:")
            .setDescription('\n```js\n' + clean(evaled) + '```')
            .setTimestamp()
            .setFooter("😌por enquanto ta tudo tranquilo...", message.author.avatarURL)
        message.reply(`executado! ${Date.now() - message.createdTimestamp}ms.`);
        message.channel.send(executado)
      } catch(err) { 
        let erro = new Discord.RichEmbed()
            .setTitle(':x: Vish... erro:')
            .setColor("ff0000")
            .setDescription('\n```js\n' + clean(err) + '```')
            .setFooter("🤦‍ Puta merda em... você só faz merda!", message.author.avatarURL)
            .setTimestamp()
        message.reply(`executado! ${Date.now() - message.createdTimestamp}ms.`);
        message.channel.send(erro)
      }
  
  function clean(text) {
      if (typeof(text) === 'string')
          return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203)).replace(client.token, 'MCA3NjM0NDc9MTIr3ktyNzY6.UDnaRg.uqLifnope7FFSf_xQqNdiB6T3A');
      else
          return text;
  }

}

exports.help = {
    name: "eval",
    aliases: [
        'exec',
        'executar'
    ]
}
