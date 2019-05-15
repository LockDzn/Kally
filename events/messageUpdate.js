const Discord = require("discord.js");

module.exports = async (oldMessage, newMessage) => {
    if(newMessage.author.bot) return;
    require('../util/filter.js')(newMessage, newMessage.content);
};