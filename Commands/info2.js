const { RichEmbed } = require("discord.js"); 

module.exports = class info {
    constructor() {
        this.name = "info",
        this.alias = [],
        this.usage = "b!info"
    }

    async run(client, message, args) {
        try{
         let infoEmbed = new RichEmbed()
         .setTitle("**Baron**")
         .setThumbnail("https://cdn.discordapp.com/avatars/660832598624305152/29a8daebd33b390bf59e0d3d203cdf3a.png?size=2048")
         .setDescription("Sunucu Yedekleme")
         .addField("Davet", "[BANA TIKLA !](discordapp.com/oauth2/authorize?client_id=660832598624305152&scope=bot&permissions=1610083447)")
         .addField("Discord", "[BANA TIKLA !](https://discord.gg/NGcN8bC)")
         .addField("Prefix", "b!", true)
         .addField("Sunucular", client.guilds.size, true)
         .addField("Kullanıcılar:", client.users.size, true)
         .setFooter("Owned by ~ Dolunay")
            message.channel.send(infoEmbed)
        }catch(e) {
            throw e;
        }
    }
}