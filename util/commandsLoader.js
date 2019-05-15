const Discord = require("discord.js");
const fs = require('fs');

module.exports = client => {
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    fs.readdir("./commands", (err, files) => {
        if(err) console.error(err);
        files.forEach((f, i) => {
            let folder = f.split('.');
            if(folder[1]) return;
            fs.readdir(`./commands/${f}/`, (err, jsf) => {
                let jsfiles = jsf.filter(f => f.split(".").pop() === "js");
                if(jsfiles.length <= 0 ) {
                    return;
                }
                jsfiles.forEach((j, k) => {
                    let props = require(`../commands/${f}/${j}`);
                    props.help.type = f;
                    client.commands.set(props.help.name, props);
                    if(!props.help || !props.help.aliases || props.help.aliases[0] == '') return;
                    props.help.aliases.forEach(alias => {
                        client.aliases.set(alias, props.help.name);
                })
            });
            })
        })
    });
}