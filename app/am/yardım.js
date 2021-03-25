const Discord = require("discord.js");
const ayarlar = require("../ayar.json");
const db = require("quick.db");
const prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
      

const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#27167A')
    .setTitle("Sitemize gidin!")
    .setURL("http://netherbot.tk/")
	.setAuthor('Pythonic', 'https://cdn.discordapp.com/attachments/736209990871941272/755062661334564904/rsz_1lol1.png')
	.setDescription('Pythonic komutları!')
	.addFields(
		{ name: 'Müzik komutları', value: `${prefix}müzik`, inline: true },
		{ name: 'Yazı komutları ', value: `${prefix}yazılar`, inline: true },
		{ name: 'Logo komutları ', value: `${prefix}logolar`, inline: true },
		{ name: 'Mod komutları ', value: `${prefix}moderasyon`, inline: true },
    { name: 'Bot ayarları ', value: `${prefix}ayarlar`, inline: true },

	)
	.addField('Gif komutları', `${prefix}gifs`, true)
	.setImage('https://i.imgur.com/tisiWVo.png')
	.setTimestamp()
	.setFooter('Pythonic 2020', 'https://cdn.discordapp.com/attachments/736209990871941272/755062661334564904/rsz_1lol1.png');

message.channel.send(exampleEmbed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0
};

exports.help = {
  name: "helpssdsfdsf",
  category: "helpsasdf",
  description: "helpdsf"
};