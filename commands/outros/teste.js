const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) =>{

   message.delete().catch(O_o=>{});
   if (message.author.id === '244537374258888725') {
      let tipo = args.slice(0).join(' ');
      if(!tipo) return message.reply('Use `k!teste <:thumbsup:/:one:> <msg>`');
      let msg = args.slice(1).join(' ');
      if(!msg) return message.reply('Use `k!teste <:thumbsup:/:one:> <msg>`');
      
      if(tipo === ":thumbsup:") {
         const vote = new Discord.RichEmbed()
            .setTitle(":thinking: Votação")
            .setDescription(`\n\n${msg}`)
            .setColor("#00ffa8")
            .setFooter(`Por: ${message.author.tag} - © Kally Votação`)
         const m = await message.channel.send(vote)
         m.react('👍')
         m.react('👎')
         m.react('❓')
      }
      if(tipo === ":one:"){
         const vote = new Discord.RichEmbed()
            .setTitle(":thinking: Votação")
            .setDescription(`\n\n${msg}`)
            .setColor("#00ffa8")
            .setFooter(`Por: ${message.author.tag} - © Kally Votação`)
         const m = await message.channel.send(vote)
         m.react('1⃣')
         m.react('2⃣')
         m.react('3⃣')
      }
  }
}

exports.help = {
  name: "teste",
}