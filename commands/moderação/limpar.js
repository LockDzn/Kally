const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) =>{

   message.delete().catch(O_o=>{});

   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("você não tem permissão! :x:");
   
   const comousar = new Discord.RichEmbed()
      .setAuthor("Kally", client.user.avatarURL)
      .setTitle(`${prefix}limpar`)
      .setDescription(`Irá limpar o número de mensagens escolhido.`)
      .setColor("#22a7cc")
      .setFooter("© Kally - kally.glitch.me")
      .addField("Como usar:", `\`${prefix}limpar <número maior que 2 e menor que 100>\`\n\`${prefix}limpar 57\``)
      .addField("Permissão:", "O staff que for mutar tem que esta em um cargo com a permissão `Gerenciar mensagens`")

   const num = args.join(" ");

   if(!num) return message.channel.send(comousar).then(msg => msg.delete(10000));
   if(isNaN(num) == true) return message.reply("por favor, digite somente números, de 2 a 100. :x:").then(msg => msg.delete(10000));
   if(num < 2) return message.reply("por favor, digite o número maior que 2 para deletar as mensagens. :x:").then(msg => msg.delete(8000));
   if(num > 100) return message.reply("por favor, digite o número maior que 2 e menos que 100. :x:").then(msg => msg.delete(8000));
   message.channel.bulkDelete(args[0]).catch(error => message.reply(`algumas mensagens não puderam ser deletadas por serem enviadas a mais de **2 semanas**!`));
   
   message.channel.send(`Chat limpo! Limpado **${args[0]}** mensagens por ${message.author}.`).then(msg => msg.delete(5000));
   
}

exports.help = {
    name: "limpar",
    aliases: [
        'clear'
    ]
}