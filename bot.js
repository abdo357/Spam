const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("644184053435727872")
setInterval(function() {
channel.send(` and are you abn 4rmota ? يابن كوم شكاير الاف ءح الدولية كسم اي حد يعترض طريقي`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
