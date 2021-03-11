const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = "p/"
var prefixbc = "bc/"

client.on("ready", () => {
    console.log("Bot Listo")
});

//Embeds 

const exampleEmb = new Discord.MessageEmbed()
	.setColor('#BB391D')
	.setFooter('Aquí estuvo Botijo-Chan');

//Bot


client.on("message", msg => {

    var user = msg.author.username;
    var botijochanname = 'Botijo-Chan'
    var botijochanurl = 'https://i.imgur.com/WA1Wyr2.jpg'

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
        switch (msg.content) {
            case prefix+"hola":
                exampleEmb.setTitle('Hola, ¿ que tal '+ user + '?')
                msg.channel.send(exampleEmb)
                break;
            case prefix+"cerdo":
                exampleEmb.setTitle('Cala can')
                msg.channel.send(exampleEmb);
                break;
            case prefix+"botijo-chan":
                exampleEmb.setTitle('¿Que necesitas '+user+'-Kun?');
                exampleEmb.setAuthor(botijochanname, botijochanurl);
                exampleEmb.setDescription('Aquí tienes mis comandos para cuando me necesites');
                exampleEmb.addFieldS(
                    { name: 'Regular field title', value: 'Comandos' },
                    { name: 'Inline field title', value: 'bc/hola', inline: true },
                    { name: 'Inline field title', value: 'bc/awua', inline: true }
                );
                break;
            case prefix+"link":
                var link = "https://discord.com/oauth2/authorize?client_id=818494330728611900&scope=bot&permissions=2147483647"
                exampleEmb.setTitle(user+' este es mi enlace de Invitación UwU');
                exampleEmb.setDescription(link)
                msg.channel.send(exampleEmb)
                break;
        }  
});

//Login

client.login(process.env.token)