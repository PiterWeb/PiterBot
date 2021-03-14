const Discord = require("discord.js");
const client = new Discord.Client();
import mergeImages from 'merge-images';

var prefix = "p/"
var prefixbc = "bc/"

client.on("ready", () => {
    console.log("Bot Listo")
});

//Embeds//


//Embed Simple

const exampleEmb = new Discord.MessageEmbed()
	.setColor('#BB391D')
	.setFooter('Aquí estuvo Botijo-Chan');

//Embed Botijo-Chan

const botijochanEmb = new Discord.MessageEmbed()
    .setColor('#BB861D')

//Bot//

client.on("message", msg => {

    var user = msg.author.username;
    var icon = msg.author.avatar;
    var botijochanname = 'Botijo-Chan';
    var botijochanimg1 = 'https://i.imgur.com/WA1Wyr2.jpg';
    var botijochanimg2 = 'https://i.imgur.com/1zH8Mj5.jpg';

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
            //Botijo-Chan
            case prefix+"botijo-chan":
                botijochanEmb.fields = [];
                botijochanEmb.image = []
                botijochanEmb.setTitle('¿Que necesitas '+user+'-Kun?');
                botijochanEmb.setAuthor(botijochanname);
                botijochanEmb.setThumbnail(botijochanimg1);
                botijochanEmb.setDescription('Aquí tienes mis comandos para cuando me necesites');
                botijochanEmb.addFields(
                    { name: 'Un saludito', value: 'bc/hola', inline: true },
                    { name: 'Si tienes sed', value: 'bc/awua', inline: true },
                    { name:'Test Amor', value:'bc/test', inline: true},
                );
                msg.channel.send(botijochanEmb)
                break;
            case prefixbc+"test":
                var porcentajecomp = Math.floor(Math.random() * 101);
                botijochanEmb.fields = [];
                botijochanEmb.image = []
                botijochanEmb.setTitle('Test de Compatibilidad');
                botijochanEmb.setAuthor(botijochanname);
                mergeImages([
                    { src: icon, x: 0, y: 0 },
                    { src: 'https://images.vexels.com/media/users/3/136176/isolated/preview/416e80b4fe03f01a1ae1f5b6e51c91a4-simbolo-de-corazon-by-vexels.png', x: 32, y: 0 },
                    { src: botijochanimg2, x: 64, y: 0 }
                  ])
                    .then(b64 => 'love.png');
                botijochanEmb.setImage('love.png');
                if(porcentajecomp>=75){
                    botijochanEmb.setDescription(user+' tienes un '+porcentajecomp+'% de compatibilidad con Botijo-Chan, hacen muy buena pareja <3 ');
                } else if (porcentajecomp>=50){
                    botijochanEmb.setDescription(user+' tienes un '+porcentajecomp+'% de compatibilidad con Botijo-Chan, llegarán a ser muy buenos amigos ');
                } else if (porcentajecomp>=25) {
                    botijochanEmb.setDescription(user+' tienes un '+porcentajecomp+'% de compatibilidad con Botijo-Chan, podrian llegar a ser amigos');
                } else if (porcentajecomp<=25 ) {
                    botijochanEmb.setDescription(user+' tienes un '+porcentajecomp+'% de compatibilidad con Botijo-Chan, puede que no llegen a ser amigos');
                }

                msg.channel.send(botijochanEmb);
                break;
            case prefix+"link":
                var link = "https://discord.com/oauth2/authorize?client_id=818494330728611900&scope=bot&permissions=2147483647"
                exampleEmb.setTitle(user+' este es mi enlace de Invitación UwU');
                exampleEmb.setDescription(link)
                msg.channel.send(exampleEmb)
                break;
        }  
});

//Login//

client.login(process.env.token)