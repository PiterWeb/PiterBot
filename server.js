const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = "p/"

client.on("ready", () => {
    console.log("Bot Listo")
});

//Embeds 

const hola = new Discord.MessageEmbed()
	.setColor('#BB391D')
	.setTitle('¿Hola, que tal'+message.author.username+'?')
	.setAuthor('PiterBot', 'https://i.imgur.com/VkqovzP.jpg', 'https://discord.js.org')
	.setFooter('Aquí estuvo Botijo-Chan');

//Bot

client.on("message", msg => {
    if(msg.author.bot || !msg.guild) {
      return;
    }
    else if (msg.author == 551114700474286101 ){
        var numero = 1;
        var elegido = Math.floor(Math.random() * 101);
        if(numero == elegido) {
            msg.reply("Calla tonto");
        }
    }
    else {
        switch (msg.content) {
            case prefix+"hola":
                msg.channel.send(hola)
                break;
            case prefix+"cerdo":
                msg.channel.send('Cala can');
                break;
            case prefix+"link":
                msg.channel.send('https://discord.com/oauth2/authorize?client_id=818494330728611900&scope=bot&permissions=2147483647')
        }
    }
    
});

//Login

client.login(process.env.token)