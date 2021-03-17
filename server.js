const Discord = require("discord.js");
const client = new Discord.Client();
const mysql = require('mysql');
const sql = require('./modules/db')

var prefix = "p/"
var prefixbc = "bc/"

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PSW,
    database: process.env.DB,
  });


con.connect(function(err) {
if (err) throw err;
console.log("Connected!");

  });

client.on("ready", async () => {
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
    } else if (msg.author == 551114700474286101 ){
        var numero = 1;
        var elegido = Math.floor(Math.random() * 101);
        if(numero == elegido) {
            msg.reply("Calla tonto");
        }
    }

    const args = msg.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    
     if (command == '/name'){
        if (!args.length) {
            return msg.channel.send(`No has cambiado el nombre, ${msg.author}!`);
        } 
            var task = "INSERT INTO users (name) VALUES (${args})";
            msg.channel.send(`Has cambiado exitosamente el nombre con el que te reconoce el bot a ${args}`);
            typeof sql.sql(task);
            
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
                botijochanEmb.setImage(botijochanimg2);
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