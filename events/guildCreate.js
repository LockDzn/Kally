const Discord = require("discord.js");
const perfectapi = require("perfect-dreams-api");

module.exports = async (guild, client) => {
	
	let perfectbot = new perfectapi.Bot("415288373071183872", process.env.PERFECTDREAMS_TOKEN)
				      
	if(guild.id === "1" || guild.id === "2"){
		//BANIR SERVIDORES DE USAR O KALLY
		guild.owner.send(`O seu servidor (**${guild.name}**) foi banido do Kally e não vai poder usar o bot Kally! **Para saber o motivo do banimento entre em https://discord.gg/mxXHyN7**`)
		guild.leave()
	}else{
		const entrei = new Discord.RichEmbed()
			.setAuthor(`${guild.name} | Adicionado`)
			.setDescription(`Entrei no servidor **${guild.name}** (id: ${guild.id})`)
			.addField(":busts_in_silhouette: Membros", `Com **${guild.memberCount - guild.members.filter(m=>m.user.bot).size}** membro(s) e **${guild.members.filter(m=>m.user.bot).size}** bot(s)`)
			.addField(":crown: Dono", `**${guild.owner.user.tag}** (ID: ${guild.owner.id})`)
			.setColor("00e7ff")
			.setFooter(`Agora estou em ${client.guilds.size} servidores!`)
		
		client.channels.get("458341973955313675").send(entrei);
		const channel = client.channels.get("469640239904980992");
		channel.setName(`📟 | Servidores: ${client.guilds.size}`)
		perfectbot.updateGuildCount(client.guilds.size)
		const adms = guild.members.filter(r => r.hasPermission('MANAGE_GUILD')).map(pessoa => `${pessoa.id}`)
    		for(var c in adms){
        		const adm = guild.members.get(adms[c]);
        		adm.send(`Olá ${adm}, tudo bem? eu sou o Kally, um bot para a moderação de servidores do discord!\n
Não sei se foi você ou outra pessoa que me adicionou no servidor \`${guild.name}\`, mas agora estou nesse servidor.\n
Meu prefix é \`k!\` e para saber meus comandos digite \`k!ajuda\` em seu servidor, desde já agradeço por usar o Kally.\n
**•** Meu site: http://kally.glitch.me/
**•** Meu servidor de suporte: https://discord.gg/mxXHyN7`).catch(O_o=>{});
    		}
	}

}
