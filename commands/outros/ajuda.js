const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefix) =>{
    
    const emojicarregando = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyCarregando");
    message.reply(`enviei para você no privado, veja suas mensagens diretas! ${emojicarregando}`).then(msg => msg.delete(6000));
    const ajuda1 = new Discord.RichEmbed()
       .setAuthor(`Ajudinha do Kally`)
       .setDescription(`Olá, ${message.author}, sou um simples bot de moderação que pode ajudar seu servidor, irei te mandar os meus comandos...\n\nPrefix do servidor **${message.guild.name}**: **${prefix}**`)
       .addField(":question: Suporte:", `https://discord.gg/mxXHyN7`)
       .addField(":computer: Site:", `https://kally.glitch.me`)
       .addField(":computer: Para me adicionar:", `https://kally.glitch.me/invite.html`)
       .setThumbnail(client.user.displayAvatarURL)
       .setColor("#22a7cc")
       .setFooter("© O Kally foi criado pelo LockDzn#8368 - Twitter dele: @LockDzn_")

       const categoria = new Discord.RichEmbed()
        .setAuthor(`Escolha uma categoria...`)
        .setDescription("\n**👮 Moderação**\n• `ban`, `mute`, `anuncio`, `limpar`, `kick`...\n\n**📋 Outros**\n• `serverinfo`, `avatar`, `convite`, `avatar`, `say`...\n\n**🎵 Música**\n• `tocar`, `parar`, `pular`, `playlist`, `tocando`...")
        .setColor("#139ec7")

       const ajuda2 = new Discord.RichEmbed()
            .setTitle(`👮 Moderação`)
            .setDescription(`*Comandos que vão ajudar a administrar servidores!* 
\n**${prefix}mute** \`@usuário e motivo\` - Irá mutar o usuário mencionado.
**${prefix}unmute** \`@usuário\` - Irá desmutar o usuário mencionado.
**${prefix}ban** \`@usuário e motivo\` - Irá banir o usuário mencionado do seu servidor do discord.
**${prefix}softban** \`@usuário e motivo\` - Irá banir e desbanir o usuário mencionado e deletar as mensagens dos últimos 7 dias desse usuário.
**${prefix}kick** \`@usuário e motivo\` - Irá kickar o usuário mencionado.
**${prefix}anuncio** \`mensagem do anuncio\` - Irá mandar um anuncio no chat que o comando foi executado.
**${prefix}limpar** \`número de mensagens\` - Irá limpar o número de mensagens escolhido.
**${prefix}aviso** \`@usuário e motivo\` - Irá avisar o usuário mencionado.
**${prefix}avisos** \`@usuário\` - Irá mostra quantos avisos o usuário mencinado tem.
**${prefix}chat** \`<on ou off>\` - Irá mutar ou desmutar o chat.`)
            .setThumbnail("https://i.imgur.com/ZmWM1UT.png")
            .setColor("#ff0000")
            .setFooter("© Kally Moderação")

            const ajuda3 = new Discord.RichEmbed()
                .setTitle(`📋 Outros`)
                .setDescription(`*Comandos que são "aleatorios" que podem te ajudar ou não. Comandos que não se encaixam nas outras categorias!* \n
\n**${prefix}ajuda** - Irá te mandar a lista de comandos.
**${prefix}botinfo** - Irá mostrar as informaçoes de mim. 
**${prefix}avatar** \`@usuário\` - Irá mostrar o avatar de um usuário.
**${prefix}uptime** - Irá mostrar o tempo que o bot esta online.
**${prefix}convite** - Irá mostrar o convite do servidor para suporte e invite do bot.
**${prefix}serverinfo** - Irá mostrar as informações do servidor que o comando foi executado.
**${prefix}vote** \`mensagem da votação\` - Irá abrir uma votação no canal que o comando foi executado.
**${prefix}setcargo** \`@usuário e nome do cargo\` - Irá adicionar o cargo ao usuário mencionado.
**${prefix}removercargo** \`@usuário e nome do cargo\` - Irá remover o cargo do usuário mencionado.
**${prefix}userinfo** \`@usuário\` - Irá mostrar as informações do usuário mencionado.
**${prefix}say** \`mensagem\` - Irá mandar uma mensagem em embed.
**${prefix}report** \`@usuário e motivo\` - Irá reportar o usuário mencionado.
**${prefix}sorteio** \`<minutos para inciar> <o que vai ser sorteado>\` - Irá iniciar um sorteio.`)
                .setThumbnail("https://i.imgur.com/lEI7Gm6.gif")
                .setColor("#00f782")
                .setFooter("© Kally Outros")
            
            const ajuda4 = new Discord.RichEmbed()
                .setTitle(`🎵 Música`)
                .setDescription(`*Comandos de música, para fazer uma baladinha em seu servidor!* \n
\n**${prefix}tocar** \`Nome da música\` - Irá tocar uma música.
**${prefix}pular** - Irá pular a música que estiver tocando. 
**${prefix}parar** - Irá parar a música que estiver tocando e limpar a playlist.
**${prefix}playlist** - Irá mostrar a lista de músicas que vai tocar.
**${prefix}entrar** - Irá entrar no canal de voz.
**${prefix}sair** - Irá sair do canal de voz.
**${prefix}pausar** - Irá pausar a música que estiver tocando.
**${prefix}despausar** - Irá despausar a música.
**${prefix}tocando** - Irá mostrar a música que está tocando.`)
                .setThumbnail("https://i.imgur.com/lEI7Gm6.gif")
                .setColor("#9833eb")
                .setFooter("© Kally Música")

    message.member.send(ajuda1).catch(error => message.reply(`ops! Seu privado está desativado e não consigo enviar a ajuda. :worried:`).then(msg => msg.delete(8000)));
    message.member.send(categoria).then(msg=> {
        msg.react("👮").then(r => {
            msg.react("📋")
            msg.react("🎵")
            
            const mod = (reaction, user) => reaction.emoji.name === '👮' && user.id === message.author.id;
            const outros = (reaction, user) => reaction.emoji.name === '📋' && user.id === message.author.id;
            const musica = (reaction, user) => reaction.emoji.name === '🎵' && user.id === message.author.id;

            const modl = msg.createReactionCollector(mod, { time: 600000 });
            const outrosl = msg.createReactionCollector(outros, { time: 600000 });
            const musical = msg.createReactionCollector(musica, { time: 600000 });

            modl.on('collect', r=> {
                message.author.send(ajuda2).catch(error => message.reply(`ops! Seu privado está desativado e não consigo enviar a ajuda. :worried:`).then(msg => msg.delete(8000)));
            })
            outrosl.on('collect', r=> {
                message.author.send(ajuda3).catch(error => message.reply(`ops! Seu privado está desativado e não consigo enviar a ajuda. :worried:`).then(msg => msg.delete(8000)));
            })
            musical.on('collect', r=> {
                message.author.send(ajuda4).catch(error => message.reply(`ops! Seu privado está desativado e não consigo enviar a ajuda. :worried:`).then(msg => msg.delete(8000)));
            })
        })
    })
}

exports.help = {
    name: "ajuda",
    aliases: [
        'help',
        'h'
    ],
}
