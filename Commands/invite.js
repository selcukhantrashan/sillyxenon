const { RichEmbed } = require("discord.js");
module.exports = class invite {
    constructor() {
        this.name = "invite",
        this.alias = [],
        this.usage = "b!invite"
    }

    async run(client, message, args) {
        try{
            let info = client.emojis.get("655091815401127966") || "ℹ️"
            client.generateInvite(['ADMINISTRATOR']).then(link => {
            let inviteEmbed = new RichEmbed()
            .setTitle(`${info} Info`)
            .setDescription(`**İnvite Baron**
[Baron](${link})
[Baron](discordapp.com/oauth2/authorize?client_id=660832598624305152&scope=bot&permissions=1610083447) 
`)
            .setColor("#5DBCD2")
            message.channel.send(inviteEmbed);
            })
        }catch(e) {
            throw e;
        }
    }
}
