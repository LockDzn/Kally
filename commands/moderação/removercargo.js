const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) =>{

    message.delete().catch(O_o=>{});
    const emojinop = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyNop");
   
    if(!message.member.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply("você não tem permissão! " + emojinop).then(msg => msg.delete(5000));
    const comousar = new Discord.RichEmbed()
       .setAuthor("Kally", client.user.avatarURL)
       .setTitle(`${prefix}removercargo`)
       .setDescription(`Irá remover o cargo do usuário mencionado.`)
       .setColor("#22a7cc")
       .setFooter("© Kally - kally.glitch.me")
       .addField("Como usar:", `\`${prefix}removercargo @usuário <nome do cargo, sem o @>\`\n\`${prefix}removercargo @LockDzn#8368 ⚒ Desenvolvedor\``)
       .addField("Permissão:", "O staff que for remover o cargo tem que está em um cargo com a permissão `Gerenciar cargos`")
       .addField("Info:", "A **minha** permissão tem que está **acima dos cargos** que eu vou remover!")
    let member = message.mentions.members.first();
    if(!member)
         return message.channel.send(comousar).then(msg => msg.delete(10000));
    let rolename = args.slice(1).join(' ');
    if(!rolename)
         return message.channel.send("por favor, digite o cargo para remover! (**OBS:** Digite sem o @ e se tiver emojis, digite com emojis! :)").then(msg => msg.delete(10000));
   
    if(!message.guild.roles.find(ro => ro.name === rolename)) return message.channel.send(`:face_palm: **|** ${message.author} o cargo **${rolename}** não existe (**OBS:** Coloque o nome do cargo certo, emojis, minúsculo e maiúsculo nos lugares certos.)`)
        
    let role = message.guild.roles.find(ro => ro.name === rolename);
    let rolekally = message.guild.roles.find(ro => ro.name === "Kally");
    
    if(rolekally.position < role.position) return message.reply(`ops! Eu não tenho permissão para remover essse cargo do usuário :worried:, para isso coloque **meu** cargo em cima do cargo que você quer retirar.`)
       
    member.removeRole(role).catch(error => {return message.reply(`ops! Eu não tenho permissão para remover essse cargo do usuário :worried:, para isso coloque **meu** cargo em cima do cargo que você quer retirar.`)});
    message.reply("O cargo `" +rolename+"`"+` foi removido de ${member}!`).then(msg => msg.delete(5000));

    if(message.guild.channels.find(ch => ch.name === "changelog")){
       let guild = message.guild.channels.find(ch => ch.name === "changelog");
       const changelog = new Discord.RichEmbed()
           .setTitle("🔧 CHANGELOG")
           .setDescription(member+ " foi removido de " +role+"!")
           .setColor(role.color)
           .setFooter(`Por: ${message.author.tag} - © Kally`)
       guild.send(changelog) 
   }else if(message.guild.channels.find(ch => ch.name === "change-log")){
      let guild = message.guild.channels.find(ch => ch.name === "change-log");
      const changelog = new Discord.RichEmbed()
         .setTitle("🔧 CHANGE-LOG")
         .setDescription(member+ " foi removido de " +role+"!")
         .setColor(role.color)
         .setFooter(`Por: ${message.author.tag} - © Kally`)
      guild.send(changelog) 
   }else if(message.guild.channels.find(ch => ch.name === "🔧change-log")){
     let guild = message.guild.channels.find(ch => ch.name === "🔧change-log");
     const changelog = new Discord.RichEmbed()
         .setTitle("🔧 CHANGE-LOG")
         .setDescription(member+ " foi removido de " +role+"!")
         .setColor(role.color)
         .setFooter(`Por: ${message.author.tag} - © Kally`)
     guild.send(changelog) 
   }else if(message.guild.channels.find(ch => ch.name === "🔧changelog")){
     let guild = message.guild.channels.find(ch => ch.name === "🔧changelog");
     const changelog = new Discord.RichEmbed()
         .setTitle("🔧 CHANGELOG")
         .setDescription(member+ " foi removido de " +role+"!")
         .setColor(role.color)
         .setFooter(`Por: ${message.author.tag} - © Kallyg`)   
    guild.send(changelog) 
   }
}

exports.help = {
  name: "removercargo",
  aliases: [
      'removecargo'
  ]
}
