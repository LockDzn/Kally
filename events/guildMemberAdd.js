const Discord = require("discord.js");
var ms = require("ms");

    /**  TEMPLATE
    if(member.guild.id == "470729160650784788"){ // SERVIDOR DE TESTE
        const entrou = new Discord.RichEmbed()
            .setTitle(`Bem-vindo(a) 👋`)
            .setDescription(`**__${member.user.username}__** entrou em nosso servidor.`)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor("#139ec7")
            .setFooter("© Kally Parceiro")
            .setTimestamp()

        let role = member.guild.roles.find("id", "470729508928880650");

        member.addRole(role) 
        member.user.send(`Olá, bem-vindo(a) ao ${member.guild.name}!`).catch(O_o=>{});
        member.guild.channels.get("470729318696222743").send(entrou)

    } // FIM */

module.exports = async (member, client) => {
    
      const sleep = time => new Promise(resolve => {
           setTimeout(resolve, time)
      })

      if(member.guild.id == "420316735149965322"){ // Kally
          const entrou = new Discord.RichEmbed()
              .setTitle(`Bem-vindo(a) 👋`)
              .setDescription(`**__${member.user.username}__** entrou no servidor.`)
              .setThumbnail(member.user.displayAvatarURL)
              .setColor("#3498db")
              .setFooter("© Kally")
              .setTimestamp()

         //let role = member.guild.roles.get("430495434172137502")

         member.addRole('430495434172137502') 
         member.user.send(`Bem-vindo ${member} ao servidor do bot Kally! para saber os comandos do bot digite \`k!ajuda\` no canal <#428401815629856768>\n\nDe sua sugestão no canal <#433385459343949826>\nReporte bug ou erro no Kally no canal <#459509701349212160>`).catch(O_o=>{});
         member.guild.channels.get("430142996051263490").send(entrou)

     } // FIM
    if(member.guild.id == "470729160650784788"){ // SERVIDOR DE TESTE
        const entrou = new Discord.RichEmbed()
            .setTitle(`Bem-vindo(a) 👋`)
            .setDescription(`**__${member.user.username}__** entrou em nosso servidor.`)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor("#139ec7")
            .setFooter("© Kally Parceiro")
            .setTimestamp()

        let role = member.guild.roles.get("470729508928880650");

        const sleep = time => new Promise(resolve => {
            setTimeout(resolve, time)
        })

        let membro = member.guild.roles.find(ro => ro.name === "Membro");
        let rnaoresg = member.guild.roles.find(ro => ro.name === "NÃO REGISTRADO");

        member.addRole(rnaoresg)

        var timea = 2 * 1000 * 60

        const senha = Math.random().toString(36).substring(2, 7)
        const info = new Discord.RichEmbed()
            .setAuthor("Sistema de segurança", client.user.displayAvatarURL)
            .setTitle(":robot: Você é um robo!?")
            .setDescription(`**${member.user.tag}**, para você se tornar membro desse servidor do discord **reaja com 🤖** (Você tem **2** minutos)`)
            .setColor("#36393e")
            .setFooter(`Sistema criado por LockDzn#8368`, member.user.displayAvatarURL)

        client.channels.get("470729919391858708").send(member, info).then(msg=> {
            msg.react("🤖")
            var collector = msg.createReactionCollector((r, u) => r.emoji.name === "🤖" && u.id == member.user.id);
                
            collector.on('collect', r => {
                msg.clearReactions()
                member.addRole(membro)
                client.channels.get("470729919391858708").send(`:white_check_mark: **|** ${member} resgistrado!`);
                return msg.delete().catch(O_o=>{});
            })
                
            collector.on('end', r => {
                if(!r.first()) {
                    msg.clearReactions()
                    member.kick(`Kikado por: ${client.user.tag} | Motivo: Demorou para se registar.`)
                    return msg.delete().catch(O_o=>{});
                }
            })
            setTimeout(() => {
                collector.stop();
            }, timea);
        });
        
    } // FIM
    if(member.guild.id == "486592941704347651"){ // SMASTHMC
        const entrou = new Discord.RichEmbed()
            .setTitle(`Bem-vindo(a) 👋`)
            .setDescription(`:stuck_out_tongue_winking_eye: Olá! Bem-vindo a Rede SmathMC! Nosso servidor é do jogo Minecraft. O Ip de nosso servidor é **smath.hostpvp.tk**

            **•** Para evitar levar alguma punição olhe o canal <#486596400038150145> para saber todas as nossas regras aqui do Discord. 
            
            **•** Para socializar vá no canal <#486596593831641116> para começar a conversar com outros jogadores aqui no nosso discord
            
            **•** Siga nosso twitter: INDISPONÍVEL
            
            **•** Caso queira comprar **VIP** ou **CASH** acesse: INDISPONÍVEL`)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor("#139ec7")
            .setFooter("© Kally Parceiro")
            .setTimestamp()

        member.guild.channels.get("486658497036156948").send(member, entrou)

    } // FIM */
    
}
