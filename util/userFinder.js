const reqEvent = (event) => require(`../events/${event}`);
const Discord = require("discord.js");

module.exports = async (message, text) => {
    if(!text) target = message.author;

    if(text) target = await message.client.users.get(text) 
                      || await message.client.users.filter(u => u.tag.toLowerCase().includes(text.toLowerCase())).first()
                      || await message.mentions.users.first();

    return target;
}