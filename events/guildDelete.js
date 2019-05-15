const Discord = require("discord.js");
const perfectapi = require("perfect-dreams-api");

module.exports = async (guild, client) => {
    let perfectbot = new perfectapi.Bot("415288373071183872", process.env.PERFECTDREAMS_TOKEN)
    
    const removido = new Discord.RichEmbed()
        .setAuthor(`${guild.name} | Removido`)
        .setDescription(`Fui removido do servidor **${guild.name}** (ID: ${guild.id})!`)
        .addField(":busts_in_silhouette: Membros", `Com **${guild.memberCount - guild.members.filter(m=>m.user.bot).size}** membro(s) e **${guild.members.filter(m=>m.user.bot).size}** bot(s)`)
        .addField(":crown: Dono", `${guild.owner.user.tag} (ID: ${guild.owner.id})`)
        .setColor("ff0000")
        .setFooter(`Agora estou em ${client.guilds.size} servidores!`)

    client.channels.get("458341973955313675").send(removido);
    perfectbot.updateGuildCount(client.guilds.size)
    const channel = client.channels.get("469640239904980992");
    channel.setName(`📟 | Servidores: ${client.guilds.size}`)

}
