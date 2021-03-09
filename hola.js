const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = "p."

client.on("ready", () => {
    console.log("Bot Listo")
});

client.on("message", msg => {
    switch (msg){
        case msg.content.startsWith(prefix,"hola"):
            msg.channel.send("Pa ti mi cola");
            break;
        case msg.content.startsWith(prefix,"felipeusafrenzy"):
            msg.channel.send("pornhubgay");
            break;
        case msg.content.startsWith(prefix,"j"):
            msg.channel.send("Cala a boca");
            break;
    }
});

client.login("ODE4NDk0MzMwNzI4NjExOTAw.YEY4Pw.VGa7xHQHpEpnGLrZ7wH3134g1Rg")