const Discord = require('discord.js');

exports.run = async (client, message, args, prefix) => {
    
    const comousar = new Discord.RichEmbed()
        .setAuthor("Kally", client.user.avatarURL)
        .setTitle(`${prefix}cargoid`)
        .setDescription(`Irá adicionar o cargo ao usuário mencionado.`)
        .setColor("#22a7cc")
        .setFooter("© Kally - kally.glitch.me")
        .addField("Como usar:", `\`${prefix}cargoid <nome do cargo>\`\n\`${prefix}setcargo ⚒ Desenvolvedor\``)

    let rolename = args.join(' ');
    if(!rolename) return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));

    if(!message.guild.roles.find(ro => ro.name === rolename)) return message.channel.send(`:face_palm: **|** ${message.author} o cargo **${rolename}** não existe (**OBS:** Coloque só o nome do cargo, emojis, minúsculo e maiúsculo nos lugares certos.)`)

    let role = message.guild.roles.find(ro => ro.name === rolename);

    const embedid = new Discord.RichEmbed()
        .setDescription(`Cargo: ${role} - ID: ${role.id}\nCor (HEX): ${role.hexColor}`)
        .setColor(role.color)

    message.channel.send(message.author, embedid)

}

exports.help = {
    name: "roleid",
    aliases: [
        'cargoid'
    ]
}
