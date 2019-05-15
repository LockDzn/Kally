const reqEvent = (event) => require(`../events/${event}`);
const Discord = require("discord.js");

module.exports = async (message, text) => {
    let client = message.client;
    let query = client.db;

    myRole = message.guild.members.get(message.author.id).highestRole;
    botRole = message.guild.members.get(client.user.id).highestRole;

    if (await botRole.comparePositionTo(myRole) <= 0) return;

    let res = await query(`select * from filter where guild_id = '${message.guild.id}'`);
    if(!res[0]) return;
    res.forEach(e => {
        if(text.toLowerCase().includes(e.phrase)) {
            message.delete();
            return message.channel.send(`${message.author}, you are not allowed to use a banned word/phrase.`)
        };
    });
}
