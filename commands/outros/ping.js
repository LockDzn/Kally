const Discord = require("discord.js");

const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

module.exports.run = async (client, message, args, prefix) =>{

    message.delete().catch(O_o=>{});
    const m = await message.channel.send(`:ping_pong: Pong!`);
    
    message.channel.send(`:ping_pong: **|** ${message.author}\n:satellite: **|** **WebSocket Ping:** \`${Math.round(client.ping)}ms\`\n:stopwatch: **|** **API Ping:** \`${m.createdTimestamp - message.createdTimestamp}ms\``)
    
    m.delete();

}

exports.help = {
    name: "ping",
}
