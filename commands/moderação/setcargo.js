const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) =>{

      message.delete().catch(O_o=>{});
      const emojinop = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyNop");
      if(!message.member.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply("você não tem permissão! " + emojinop).then(msg => msg.delete(5000));
      const comousar = new Discord.RichEmbed()
          .setAuthor("Kally", client.user.avatarURL)
          .setTitle(`${prefix}setcargo`)
          .setDescription(`Irá adicionar o cargo ao usuário mencionado.`)
          .setColor("#22a7cc")
          .setFooter("© Kally - kally.glitch.me")
          .addField("Como usar:", `\`${prefix}setcargo @usuário <nome do cargo>\`\n\`${prefix}setcargo @LockDzn#8368 ⚒ Desenvolvedor\``)
          .addField("Permissão:", "O staff que for adicionar o cargo tem que está em um cargo com a permissão `Gerenciar cargos`")
          .addField("Info:", "A **minha** permissão tem que está **acima dos cargos** que eu vou adicionar!")
      let member = message.mentions.members.first();
      if(!member)
         return message.channel.send(comousar).then(msg => msg.delete(10000));
      let rolename = args.slice(1).join(' ');
      if(!rolename)
         return message.channel.send("por favor, digite o cargo para adicionar! (**OBS:** Digite sem o @ e se tiver emojis, digite com emojis! :)").then(msg => msg.delete(10000));
   
      if(!message.guild.roles.find(ro => ro.name === rolename)) return message.channel.send(`:face_palm: **|** ${message.author} o cargo **${rolename}** não existe (**OBS:** Coloque o nome do cargo certo, emojis, minúsculo e maiúsculo nos lugares certos.)`)

      let role = message.guild.roles.find(ro => ro.name === rolename);
      let rolekally = message.guild.roles.find(ro => ro.name === "Kally");
    
      if(rolekally.position < role.position) return message.reply(`ops! Eu não tenho permissão para adicionar essse cargo do usuário :worried:, para isso coloque **meu** cargo em cima do cargo que você quer retirar.`)
      
      member.addRole(role).catch(error => {return message.reply(`ops! Eu não tenho permissão para adicionar essse cargo no usuário :worried:, para isso coloque meu cargo em cima do cargo que você quer setar.`)});
      message.reply(`cargo `+ "`" +rolename + "`" + ` setado com sucesso em ${member}! :white_check_mark:`).then(msg => msg.delete(5000));
        
      if(message.guild.channels.find(ch => ch.name === "changelog")){
            let guild = message.guild.channels.find(ch => ch.name === "changelog");
            const changelog = new Discord.RichEmbed()
              .setTitle("CHANGELOG")
              .setDescription(member+ " adicionado como " +role+"!")
              .setColor(role.color)
              .setFooter(`Por: ${message.author.tag} - © Kally`)   
            guild.send(changelog) 
   }else if(message.guild.channels.find(ch => ch.name === "change-log")){
            let guild = message.guild.channels.find(ch => ch.name === "change-log");
            const changelog = new Discord.RichEmbed()
                  .setTitle("CHANGE-LOG")
                  .setDescription(member+ " adicionado como " +role+"!")
                  .setColor(role.color)
                  .setFooter(`Por: ${message.author.tag} - © Kally`)    
            guild.send(changelog) 
   }else if(message.guild.channels.find(ch => ch.name === "🔧change-log")){
            let guild = message.guild.channels.find(ch => ch.name === "🔧change-log");
            const changelog = new Discord.RichEmbed()
                  .setTitle("🔧 CHANGE-LOG")
                  .setDescription(member+ " adicionado como " +role+"!")
                  .setColor(role.color)
                  .setFooter(`Por: ${message.author.tag} - © Kally`)  
            guild.send(changelog) 
   }else if(message.guild.channels.find(ch => ch.name === "🔧changelog")){
            let guild = message.guild.channels.find(ch => ch.name === "🔧changelog");
            const changelog = new Discord.RichEmbed()
                  .setTitle(":🔧 CHANGELOG")
                  .setDescription(member+ " adicionado como "+role+"!")
                  .setColor(role.color)
                  .setFooter(`Por: ${message.author.tag} - © Kally`)  
            guild.send(changelog) 
   }
}

exports.help = {
  name: "setcargo",
  aliases: [
      'setarcargo',
      'addcargo'
  ]
}
