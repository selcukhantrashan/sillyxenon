const { RichEmbed } = require("discord.js");
module.exports = class {
    constructor() {
        this.name = "help",
        this.alias = [""],
        this.usage = "**b!help"
    }

    async run(client, message, args) {
        try{
            if(!args[1]) {
              
            let helpEmbed = new RichEmbed()
            .setTitle("__**Oluştur**__")
            .setDescription(`
            
            __**Güvenlik**__
            
            **b!backup**          Oluşturur & sunucunuzun yedeklerini yükle
            
            __**Diğerleri.**__
          
            **b!help**            Bu mesajı gösterir
            **b!info**            Bilgilendirme mesajını iletir. 
            **b!invite**          Davet eder Baron
            **b!leave**           Bot Sunucudan Çıkar
            **b!ping**            Ping ölçer.
         
            
            `)
             .setFooter(`Kullanım \`**b!help [command]\` komutu böyle kullan..
            Kullanım \`**b!help [category]\` katagoriyi böyle kullan.`)
            .setColor("#5DBCD2")
            message.channel.send(helpEmbed)
              return;
            }

            if(args[1] === "backup") {
                const embed = new RichEmbed()
                    .setTitle(`**b!backup**

Oluşturur ve yeniden yükler.

__**Komutlar**__
`)
                    .setDescription(`
                b!backup create        Oluştur , geri yükle
                b!backup delete        Geri yükle siler
                b!backup info          Geri yükleme hakkında bilgi verir.
                b!backup list          Geri yükleme listesi
                b!backup load          Yüklere bakar.
                b!backup purge         Geri yüklemelerin hepsini silrr.`)
                    .addBlankField()
                    .setFooter(`Kullanım \`b!help [command]\` Daha Çok Bilgi Alabilirsin
\`b!help [category]\` Kullanarak Katagori Hakkında Daha Çok Bilgi Edin`)
                    .setColor("#5DBCD2")
                message.channel.send(embed)
            }

            if(args[1] === "help") {
                let showsThisMessageEmbed = new RichEmbed()
                    .setTitle("**b!help [command]**")
                    .setDescription("Bu Mesajı Gör")
                    .addBlankField()
                    .setFooter(`Kullanım \`b!help [command]\` Daha Çok Bilgi Alabilirsin
\`b!help [category]\` Kullanarak Katagori Hakkında Daha Çok Bilgi Edin`)
                    .setColor("#5DBCD2")
                    message.channel.send(showsThisMessageEmbed);
            }

            if(args[1] === "info") {
                let infoEmbed = new RichEmbed()
                    .setTitle("**b!info**")
                    .setDescription("Baron Hakkında Bilgi Alırsınız")
                    .addBlankField()
                    .setFooter(`Kullanım \`b!help [command]\` Daha Çok Bilgi Alabilirsin
\`b!help [category]\` Kullanarak Katagori Hakkında Daha Çok Bilgi Edin`)
                    .setColor("#5DBCD2")
                    message.channel.send(infoEmbed);
            }

            if(args[1] === "invite") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**b!invite**")
                    .setDescription("İnvite Baron")
                    .addBlankField()
                    .setFooter(`Kullanım \`b!help [command]\` Daha Çok Bilgi Alabilirsin
\`b!help [category]\` Kullanarak Katagori Hakkında Daha Çok Bilgi Edin`)
                    .setColor("#5DBCD2")
                    message.channel.send(inviteEmbed)
            }

            if (args[1] === "leave") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**b!leave**")
                    .setDescription("Bot Sunucudan Cıkar")
                    .addBlankField()
                    .setFooter(`Kullanım \`b!help [command]\` Daha Çok Bilgi Alabilirsin
\`b!help [category]\` Kullanarak Katagori Hakkında Daha Çok Bilgi Edin`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }

            if (args[1] === "ping") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**b!ping**")
                    .setDescription("Pong")
                    .addBlankField()
                    .setFooter(`Kullanım \`b!help [command]\` Daha Çok Bilgi Alabilirsin
\`b!help [category]\` Kullanarak Katagori Hakkında Daha Çok Bilgi Edin`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }



        }catch(e) {
            throw e;
        }
    }
}
