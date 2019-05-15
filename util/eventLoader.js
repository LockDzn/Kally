const reqEvent = (event) => require(`../events/${event}`);
const Discord = require("discord.js");

module.exports = client => {
    client.on('ready', () => reqEvent('ready')(client));
    client.on('message', (message) => reqEvent('message')(message));
    // client.on('reconnecting', () => reqEvent('ready')(client));
    // client.on('disconnected', () => reqEvent('ready')(client));
    client.on('error', (error) => reqEvent('error')(client, error));
    client.on('guildMemberAdd', (member) => reqEvent('guildMemberAdd')(member,client));
    client.on('guildMemberRemove', (member) => reqEvent('guildMemberRemove')(member,client));
    //client.on('messageUpdate', (oldMessage, newMessage) => reqEvent('messageUpdate')(oldMessage, newMessage));
    client.on('guildCreate', (guild) => reqEvent('guildCreate')(guild,client));
    client.on('guildDelete', (guild) => reqEvent('guildDelete')(guild,client));
}
