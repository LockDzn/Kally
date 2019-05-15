const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    message.delete().catch(O_o=>{});

    const ar = args.join(" ");

    if(!ar) message.reply("você tem que digitar somente o nome do cargo (sem mencionar)!")
    const emojicarregando = client.guilds.get("420316735149965322").emojis.find(em => em.name === "KallyCarregando")
    
    let role = message.guild.roles.find(ro => ro.name === ar);
    if(!role) return message.reply(`o cargo \`${ar}\` não foi encontrada (digite sem mencionar o cargo).`);
    
    message.channel.send(`Verificando ${message.guild.memberCount} membro(s)... ${emojicarregando}`).then(msg => msg.delete(8000));
    message.guild.members.filter(m => !m.user.bot).map(async member => await member.addRole(role));

    message.reply(`todos os membros do servidor ganharam o cargo \`${role.name}\` :white_check_mark: (Pode demorar um pouco para todos ganharem o cargo)`);

}

exports.help = {
    name: "giverole",
    aliases: [
        'giveallrole',
        'cargoall'
    ]
}