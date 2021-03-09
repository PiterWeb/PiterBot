const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = "p/"

client.on("ready", () => {
    console.log("Bot Listo")
});

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
                msg.channel.send('Que tal estás ' + msg.author.username + "?");
                break;
            case prefix+"cerdo":
                msg.channel.send('Cala can');
            case prefix+"link":
                msg.channel.send('https://discord.com/oauth2/authorize?client_id=818494330728611900&scope=bot&permissions=2147483647')
                break;
        }
    }
    
});

client.login("ODE4NDk0MzMwNzI4NjExOTAw.YEY4Pw.VGa7xHQHpEpnGLrZ7wH3134g1Rg")