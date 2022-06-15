const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
});

client.on("ready", () => {
  console.log(`You're logged in as ${client.user.tag} !`);
});

const welcomeChannelId = "985606077905244241";

client.on("guildMemberAdd", (member) => {
  member.guild.channels.cache
    .get(welcomeChannelId)
    .send(`<@${member.id}>,Welcome to FTDXC's Co-Space..!`);
});

client.login(process.env.TOKEN);
