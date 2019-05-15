
const Discord = require("discord.js");

module.exports.run = async (client) =>{


    const sleep = time => new Promise(resolve => {
        setTimeout(resolve, time)
    })
    var i;
    console.log("O loop presence foi ativado!\n")

    for (i=0; i<10;){
        client.user.setPresence({ game: { name: `para ${client.guilds.size} servidores! Muito obrigado por me usarem 😘`, url: "https://twitch.tv/LockDzn", type: 1} });
        await sleep(60000)
        client.user.setPresence({ game: { name: "k!ajuda | k!convite", type: 0 } });
        await sleep(60000)
        client.user.setPresence({ game: { name: `${client.users.size} pessoas! Muita gente 😯`, type: 3} });
        await sleep(60000)
        client.user.setPresence({ game: { name: `📩 Me adicione em seu servidor https://kally.glitch.me/invite`, url: "https://twitch.tv/LockDzn", type: 2} });
        await sleep(60000)
        client.user.setPresence({ game: { name: `❓ Fui desenvolvido pelo LockDzn#8368`, url: "https://twitch.tv/LockDzn", type: 3} });
        await sleep(60000)
    }
   

}
