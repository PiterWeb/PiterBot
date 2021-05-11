const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('./modules/db.js')

//BOT PREFIX

var prefix = "p/"
var prefixbc = "bc/"

client.on("ready", async () => {
    console.log("Bot Listo")
    client.user.setStatus('Jugando a comunismo');

});

//EMBEDS//

//EMBED ADV

const advEmb = new Discord.MessageEmbed()
    .setColor('#D12D1D')
    .setFooter('Sigue las instrucciones de este mensaje')

//EMBED SIMPLE

const exampleEmb = new Discord.MessageEmbed()
	.setColor('#BB391D')
	.setFooter('Aquí estuvo Botijo-Chan');

//EMBED BC

const botijochanEmb = new Discord.MessageEmbed()
    .setColor('#BB861D')

//BOT//


client.on("message", msg => {

    //USER VAR
    var user = msg.author.username;
    user = user.replace(/ /g,'');
    user = user.charAt(0).toUpperCase() + user.slice(1);  
    var icon = msg.author.avatar;

    //BC VAR
    var botijochanname = 'Botijo-Chan';
    var botijochanimg1 = 'https://i.imgur.com/WA1Wyr2.jpg';
    var botijochanimg2 = 'https://i.imgur.com/1zH8Mj5.jpg';

    //SQL VAR 

    //SQL FUNCTIONS

    //FILTER VAR

    let filter = m => m.author.id === msg.author.id
    
    //BOT msg

    if(msg.author.bot || !msg.guild) {
      return;
    } else if (msg.author == 551114700474286101 ){  
    //PROBABILITY WITH USER MSG
        var numero = 1;
        var elegido = Math.floor(Math.random() * 99);
        if(numero == elegido) {
            msg.reply("Calla tonto");
        }
    }

    //MSG CONTENT

        switch (msg.content) {
            //BOT MSG
            case prefix+"name":
                advEmb.setTitle('Especifíca el nombre escribiendolo despues de este mensaje')
                msg.channel.send(advEmb).then(() => {
                    msg.channel.awaitMessages(filter, {
                        max: 1,
                        time: 20000,
                        errors: ['time']
                      })
                      .then(msg => {
                        var msgcontent = msg.first().content
                        msg = msg.first()
                        console.log(msgcontent)
                        var insert = "INSERT INTO users(name,user) VALUES('"+msgcontent+"','"+user+"')";
                        msg.channel.send(`Has cambiado exitosamente el nombre con el que te reconoce el bot a ${msg}`);
                        db.sqlinsert(insert);
                        })
                      .catch(collected => {
                        msg.channel.send('Se acabó el tiempo o ha ocurrido un error en la consulta. error:'+collected);
                      });
                    });
                break;
            case prefix+"hola": 

                exampleEmb.setDescription = []

                var getname = "SELECT name FROM users WHERE user = '"+user+"'";
                var getName;
            
                db.sqlselect(getname, function(err,data){
                    if (err) {
                        return console.error(err.message);          
                    } else {   
                        getName = data;
                        getName = getName.charAt(0).toUpperCase() + getName.slice(1);
                        console.log(getName);
                    }
                });

                //WAIT FOR SQL RESULT

                var delay = 50

                setTimeout(()=>{  
                    if (getName == null | getName == undefined){
                        delay = delay*2
                        setTimeout(()=>{
                            exampleEmb.setTitle('Hola, ¿ que tal '+ getName + ' ?');
                            msg.channel.send(exampleEmb);
                        },delay);
                    } else {
                        exampleEmb.setTitle('Hola, ¿ que tal '+ getName + ' ?');
                        msg.channel.send(exampleEmb);
                    }
                }, delay);

                break;
            case prefix+"cerdo":
                exampleEmb.setTitle('Cala can');
                msg.channel.send(exampleEmb);
                break;
            //BC MSG
            case prefix+"bc":

                var getname = "SELECT name FROM users WHERE user = '"+user+"'";
                var getName;
            
                db.sqlselect(getname, function(err,data){
                    if (err) {
                        return console.error(err.message);           
                    } else {   
                        getName = data;
                        getName = getName.charAt(0).toUpperCase() + getName.slice(1);
                        console.log(getName);
                    }
                });

                //WAIT FOR SQL RESULT

                var delay = 50

                setTimeout(()=>{  
                    if (getName == null | getName == undefined){
                        delay = delay*2
                        setTimeout(()=>{
                            botijochanEmb.setTitle('¿Que necesitas '+getName+'-Kun?');
                            msg.channel.send(botijochanEmb)
                        },delay);
                    } else {
                        botijochanEmb.setTitle('¿Que necesitas '+getName+'-Kun?');
                        msg.channel.send(botijochanEmb)
                    }
                }, delay);

                //EMBED BC

                botijochanEmb.fields = [];
                botijochanEmb.image = []
                botijochanEmb.setAuthor(botijochanname);
                botijochanEmb.setThumbnail(botijochanimg1);
                botijochanEmb.setDescription('Aquí tienes mis comandos para cuando me necesites');
                botijochanEmb.addFields(
                    { name: 'Un saludito', value: 'bc/hola', inline: true },
                    { name: 'Si tienes sed', value: 'bc/awua', inline: true },
                    { name:'Test Amor', value:'bc/test', inline: true},
                );

                break;
            case prefixbc+"test":

                var getname = "SELECT name FROM users WHERE user = '"+user+"'";
                var getName;
            
                db.sqlselect(getname, function(err,data){
                    if (err) {
                        return console.error(err.message);            
                    } else {   
                        getName = data;
                        getName = getName.charAt(0).toUpperCase() + getName.slice(1);
                        console.log(getName);
                    }
                });

                //WAIT FOR SQL RESULT

                var delay = 50

                setTimeout(()=>{  
                    if (getName == null | getName == undefined){
                        delay = delay*2
                        setTimeout(()=>{
                            if(porcentajecomp>=75){
                                botijochanEmb.setDescription(getName+'-Kun tienes un '+porcentajecomp+'% de compatibilidad con Botijo-Chan, hacen muy buena pareja <3 ');
                            } else if (porcentajecomp>=50){
                                botijochanEmb.setDescription(getName+'-Kun tienes un '+porcentajecomp+'% de compatibilidad con Botijo-Chan, llegarán a ser muy buenos amigos ');
                            } else if (porcentajecomp>=25) {
                                botijochanEmb.setDescription(getName+'-Kun tienes un '+porcentajecomp+'% de compatibilidad con Botijo-Chan, podrian llegar a ser amigos');
                            } else if (porcentajecomp<=25 ) {
                                botijochanEmb.setDescription(getName+'-Kun tienes un '+porcentajecomp+'% de compatibilidad con Botijo-Chan, puede que no llegen a ser amigos');
                            }
                            msg.channel.send(botijochanEmb);
                        },delay);
                    } else {
                        if(porcentajecomp>=75){
                            botijochanEmb.setDescription(getName+'-Kun tienes un '+porcentajecomp+'% de compatibilidad con Botijo-Chan, hacen muy buena pareja <3 ');
                        } else if (porcentajecomp>=50){
                            botijochanEmb.setDescription(getName+'-Kun tienes un '+porcentajecomp+'% de compatibilidad con Botijo-Chan, llegarán a ser muy buenos amigos ');
                        } else if (porcentajecomp>=25) {
                            botijochanEmb.setDescription(getName+'-Kun tienes un '+porcentajecomp+'% de compatibilidad con Botijo-Chan, podrian llegar a ser amigos');
                        } else if (porcentajecomp<=25 ) {
                            botijochanEmb.setDescription(getName+'-Kun tienes un '+porcentajecomp+'% de compatibilidad con Botijo-Chan, puede que no llegen a ser amigos');
                        }
                        msg.channel.send(botijochanEmb);
                    }
                }, delay);

                //EMBED BC

                var porcentajecomp = Math.floor(Math.random() * 101);
                botijochanEmb.fields = [];
                botijochanEmb.image = []
                botijochanEmb.setTitle('Test de Compatibilidad');
                botijochanEmb.setAuthor(botijochanname);
                botijochanEmb.setImage(botijochanimg2);
                break;

            case prefixbc +'awua' :
                
                var getname = "SELECT name FROM users WHERE user = '"+user+"'";
                var getName;
            
                db.sqlselect(getname, function(err,data){
                    if (err) {
                        return console.error(err.message);           
                    } else {   
                        getName = data;
                        getName = getName.charAt(0).toUpperCase() + getName.slice(1);
                        console.log(getName);
                    }
                });

                //WAIT FOR SQL RESULT

                var delay = 50

                setTimeout(()=>{  
                    if (getName == null | getName == undefined){
                        delay = delay*2
                        setTimeout(()=>{
                            botijochanEmb.setDescription('Puedes beber de mi coleta ' +getName+'-Kun');
                            msg.channel.send(botijochanEmb)
                        },delay);
                    } else {
                        botijochanEmb.setDescription('Puedes beber de mi coleta ' +getName+'-Kun');
                        msg.channel.send(botijochanEmb)
                    }
                }, delay);

                //EMBED BC

                botijochanEmb.fields = [];
                botijochanEmb.image = []
                botijochanEmb.setTitle('¿Quieres Awua?');
                botijochanEmb.setAuthor(botijochanname);
                botijochanEmb.setImage(botijochanimg2);
                //REACT TO MESSAGE

                msg.react('💧');
                break;
            case prefixbc+'hola':
                var opciones = Math.floor(Math.random() * 3);

                var getname = "SELECT name FROM users WHERE user = '"+user+"'";
                var getName;
            
                db.sqlselect(getname, function(err,data){
                    if (err) {
                        return console.error(err.message);           
                    } else {   
                        getName = data;
                        getName = getName.charAt(0).toUpperCase() + getName.slice(1);
                        console.log(getName);
                    }
                });

                //WAIT FOR SQL RESULT

                var delay = 50

                setTimeout(()=>{  
                    if (getName == null | getName == undefined){
                        delay = delay*2
                        setTimeout(()=>{
                            switch(opciones){
                                case 1:
                                botijochanEmb.setTitle('Hola wuapo '+'💕');
                                msg.react('💕');
                                msg.channel.send(botijochanEmb)
                                break;
                                case 2:
                                botijochanEmb.setTitle('No tengo ganas de hablar '+'😡')
                                msg.react('😡');
                                msg.channel.send(botijochanEmb)
                                break;
                                default:
                                botijochanEmb.setTitle('... Hola ' +getName+ ' ,que tal te encuentras? '+'👉 👈'+' '+'😳')
                                msg.react('👉');
                                msg.react('👈');
                                msg.react('😳');
                                msg.channel.send(botijochanEmb)
                                break;
                                }
                        },delay);
                    } else {
                        switch(opciones){
                            case 1:
                            botijochanEmb.setTitle('Hola wuapo '+'💕');
                            msg.react('💕');
                            msg.channel.send(botijochanEmb)
                            break;
                            case 2:
                            botijochanEmb.setTitle('No tengo ganas de hablar '+'😡')
                            msg.react('😡');
                            msg.channel.send(botijochanEmb)
                            break;
                            default:
                            botijochanEmb.setTitle('... Hola ' +getName+ ' ,que tal te encuentras? '+'👉 👈'+' '+'😳')
                            msg.react('👉');
                            msg.react('👈');
                            msg.react('😳');
                            msg.channel.send(botijochanEmb)
                            break;
                            }
                    }
                }, delay);

                

                botijochanEmb.fields = [];
                botijochanEmb.image = []
                botijochanEmb.setAuthor(botijochanname);
                botijochanEmb.setImage(botijochanimg2);
                break;
                //ADMIN MSG
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