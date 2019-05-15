const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   if(message.member.id == "244537374258888725") {
   
      let mensg = args.join(" ");
      if(!mensg)
        return message.reply("por favor, digite o que o bot vai assistir!");
        
       
      client.user.setPresence({ game: { name: mensg, type: 3 } });
      message.reply(`o bot esta assistindo ${mensg}`)
      console.log('O bot esta assistindo ' + mensg)

   }
   
}

exports.help = {
  name: "setassistindo",
  aliases: [
      'setass'
  ]
}