const { Client, RichEmbed } = require("discord.js");
const { CommandHandler } = require("djs-commands");
const client = new Client({ disableEveryone: true });
var approx = require('approximate-number');
const config = require("./config.json");
const CH = new CommandHandler({
    folder: __dirname + "/Commands/",
    prefix: config.prefix 
});


client.on("ready", () => {
    console.log("Ready !");
    client.user.setActivity(`${approx(client.guilds.size)} Sunucular | b!help`, {type: "WATCHING"})
});

client.on("message", async (message) => {

    if(message.author.type === 'bot') return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;

    try{
        cmd.run(client,message,args)
    }catch(e){
        console.log(e)
    }

});

let info = client.emojis.get("655091815401127966") || "ℹ️" //https://cdn.discordapp.com/emojis/655091815401127966.png?v=1

client.on("guildCreate", guild => {
  
      let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    let channel = client.channels.get(guild.systemChannelID || channelID);
  
    let newserverEmbed = new RichEmbed()
    .setTitle(`${info}  Info`)
    .setDescription(`__Sunucunuza Baron Botu eklediğiniz için teşekkürler!__ :smiley:
 \`b!help\` İle Komutlarımızı Bulabilirsiniz.
Baron kullanmaya karar verirseniz **Destek Sunucumuza Gelebilirsiniz[Destek](https://discord.gg/83HcMrr)**`)
    .setColor("#5DBCD2")
channel.send(newserverEmbed)
})  

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === config.sahip) permlvl = 4;
    return permlvl;
};




client.login(config.token)
