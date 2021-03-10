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
    else if (msg.author == 440967791462318091) {
        if (msg.content == prefix+"link"){
            msg.channel.send('https://discord.com/oauth2/authorize?client_id=818494330728611900&scope=bot&permissions=2147483647')
        }
    }
    else {
        switch (msg.content) {
            case prefix+"hola":
                msg.channel.send('Que tal estás ' + msg.author.username + "?");
                msg.channel.send(toString(
                    {
                    "content": null,
                    "embeds": [
                      {
                        "title": "CONTENT",
                        "color": null,
                        "author": {
                          "name": "PiterBot",
                          "icon_url": "https://cdn.discordapp.com/avatars/819229238737240094/485e339fbebef52a2e4f007cec90bdc1.png"
                        }
                      }
                    ]
                    }
                  ));
                  
                break;
            case prefix+"cerdo":
                msg.channel.send('Cala can');
                break;
        }
    }
    
});

client.login(process.env.token)