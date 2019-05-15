const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   if(message.member.id == "244537374258888725") {
   
      let mensg = args.join(" ");
      if(!mensg)
        return message.reply("por favor, digite o que o bot vai trasmitir!");
        
       
      client.user.setPresence({ game: { name: mensg, url: 'https://twitch.tv/LockDzn' , type: 1 } });
      message.reply(`o bot esta transmitindo ${mensg}`)
      console.log('O bot esta transmitindo ' + mensg)

   }
   
}

exports.help = {
  name: "setlive"
}
