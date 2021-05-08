const Discord = require("discord.js");

const bot = new Discord.Client();

const token  = require("./config.json");

bot.on("ready", async () => {
    console.log("bot opérationnel")
    bot.user.setStatus("online")
    bot.user.setActivity("twerker clara", {type:"WATCHING"})
})

bot.on("message", message => {
    if(message.content.startsWith("Quoi")){
        message.channel.send(`FEUR`)
    }
    if(message.content.startsWith("quoi")){
        message.channel.send(`FEUR`)       
    }
    if(message.content.startsWith("QUOI")){
        message.channel.send(`FEUR`)
    }
})

bot.on("message", message => {
    if(message.content.startsWith("Oui")){
        message.channel.send(`STITI`)
    }
    if(message.content.startsWith("oui")){
        message.channel.send(`STITI`)
    }
    if(message.content.startsWith("OUI")){
        message.channel.send(`STITI`)
    }
})

bot.on("message", message => {
    if(message.content.startsWith("Ah")){
        message.channel.send(`BRICOT`)
    }
    if(message.content.startsWith("AH")){
        message.channel.send(`BRICOT`)
    }
    if(message.content.startsWith("ah")){
        message.channel.send(`BRICOT`)
    }
})

bot.on("message", message => {
    if(message.content === "ratio"){
        let tab = [
            "+ tg",
            "+ va t'acheter une vie",
            "+ nak le bogoss"
        ]
        let index = Math.floor(Math.random() * (tab.length))
        message.channel.send(tab[index])
    }
    if(message.content === "Ratio"){
        let tab = [
            "+ tg",
            "+ va t'acheter une vie",
            "+ nak le bogoss"
        ]
        let index = Math.floor(Math.random() * (tab.length))
        message.channel.send(tab[index])
    }
})

bot.login(token);