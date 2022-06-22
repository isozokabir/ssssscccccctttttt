const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const Canvas = require('canvas')
const fs = require('fs').promises;
var prefix = ["^"]
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILDS
    ]
});



//// dm logger
client.on("message", async (message, guild) => {
  if(message.channel.type === 'dm'){
    if(message.content.includes(`@everyone`)) return
    if(message.author.id === '952853713305890826')return
    if(message.content.includes('@'))return message.channel.send('nemitoni kasi mention koni feshar bokhor')

    const ordakserver = client.guilds.cache.get("769400813243465738");
    const channelbug = ordakserver.channels.cache.get('772016111654535179')
    const embed = new Discord.MessageEmbed().setColor(`RANDOM`)
    .setAuthor(`${message.author.username} \t ${message.author.id}`,`https://cdn.discordapp.com/avatars/952853713305890826/a0b4082954b73ce3180daff079185281.png?size=1024`)
    .setDescription(`> ${message.content}`)
    channelbug.send(embed).then((msg)=>{msg.react('893849651332149288')})
}
})


////SAY
client.on("message", async msg => {
  if(msg.author.bot) return;

  const args = msg.content.slice(prefix[0].length).trim().split(/ +/g)

  const command = args.shift().toLowerCase();

  if(!command){
    
  }else if (command === "say"){
    const say = args.slice(0).join(" ");

    if(!say) return msg.channel.send("");
    msg.delete();

    if(!msg.member.roles.cache.some(roles => roles.name === "Master" )){
      return;
}
    return msg.channel.send(say)
}
})
  

////server info
client.on('message', message => {
  if (message.content.toLowerCase() === `${prefix}serverinfo`) {
    const embed = new Discord.MessageEmbed()
      .setColor("ffffff")
      .setTitle("Server Info")
      .setImage(message.guild.iconURL)
      .setDescription(`${message.guild}'s information`)
      .addField("✨Owner", `Kale Gonde Ye In Server:  ${message.guild.owner}`)
      .addField("👮‍♂️Member Count", `Tedad Aza server: ${message.guild.memberCount} members`)
      .addField("😂Emoji Count", `In Server Daraye: ${message.guild.emojis.cache.size} emoji Hast`)
      .addField("🔐Roles Count", `in Server: ${message.guild.roles.cache.size} role Dard`)
      message.channel.send(embed)
  }
})

////AVATAR
var prefix = "^";
 client.on('message', async message => {
    if (message.author.bot) return;
if(!message.guild || message.author.bot) return;
   if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (command === 'avatar') {
const Discord = require('discord.js');
const db = require('quick.db')
    const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

   let embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("**Avatar**")
    .setColor('RANDOM')
    .setThumbnail(client.user.displayAvatarURL())
    .addField(`Format **PNG**`,`**[Download *PNG*](${target.user.displayAvatarURL({ dynamic: true,size:4096 , format: "png" })})**`,true )
    .addField(`Format **WEBP**`,`**[Download *WEBP*](${target.user.displayAvatarURL({ dynamic: true,size:4096 , format: "webp" })})**`,true )
    .addField(`Format **JPEG**`,`**[Download *JPEG*](${target.user.displayAvatarURL({ dynamic: true,size:4096 , format: "jpeg" })})**`,true )
    .addField(`Format **GIF**`,`**[Download *GIF*](${target.user.displayAvatarURL({ dynamic: true ,size:4096, format: "gif" })})**`,true )
    .addField(`Format **JPG**`,`**[Download *JPG*](${target.user.displayAvatarURL({ dynamic: true ,size:4096, format: "jpg" })})**`,true )
    .setImage(target.user.displayAvatarURL( { size:4096 , dynamic: true } ))
    
    .setAuthor(`Rquired By ${message.author.tag}`, message.author.displayAvatarURL())
    .setFooter(`Avatar Of ${target.user.tag} | SCOTTS BOT |`, target.user.displayAvatarURL())
    .setTimestamp()
        message.channel.send(embed);    
  }
})
////LOGIN LOG
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

//// REPLY MASSAGE
client.on("message", msg => {
  if (msg.content === "kir" ) {
    msg.reply("فـحـاشـی نـکن دوسـت عزیـز");
  }
})
client.on("message", msg => {
  if (msg.content === "youhanna") {
    msg.reply("<:youhanna:865911792224305152>");
  }
})
client.on("message", msg => {
  if (msg.content === "salam") {
    msg.reply("salam va dorod ");
  }
})
client.on("message", msg => {
  if (msg.content === "سلام") {
    msg.reply("سلام و درود");
  }
})

///// CHANGE BANNER

client.on('ready', () => {
    console.log('ready');
    setInterval(changeBanner, 60000)
});

async function changeBanner() {
    const images = await fs.readdir('images');
    const image = `images/${images[Math.floor(Math.random() * images.length)]}`;
    const guild = client.guilds.cache.get('769400813243465738');
    const number = await getVoiceMembers(guild);
    const banner = await editBanner(image, getVoiceMembers(guild));
    await guild.setBanner(banner);
}

function getVoiceMembers(guild) {
    let count = 0;
    guild.voiceStates.cache.each(() => count++)
    return count
}

async function editBanner(image, number) {
    const canvas = Canvas.createCanvas(1920, 1080);
    const context = canvas.getContext('2d');
    const background = await Canvas.loadImage(image);
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    context.font = '115px Foxbot';
    context.fillStyle = '#ffffff';
    context.fillText(` ${number}`, 500, 980);
    return canvas.toBuffer();
}

//// JOIN VOICE
client.on('ready',async () => {
    let serverid = '769400813243465738'
    let voiceid = '769400817270128650'
    if(!client.voice.connections.get(serverid)) {
    let channel = client.channels.cache.get(voiceid) || await client.channels.fetch(voiceid)
    if(!channel) return;
   
    const connection = await channel.join()
    const setSelfDeaf = connection.voice.setSelfDeaf(false);
    const setSelfMeaf = connection.voice.setSelfMute(false);
  
   }
   })



   
///// status bot

client.on("ready", () => {
    function status() {
  
      let count = 0;
      const gGuild = client.guilds.cache.get("769400813243465738")
      const voiceChannels = gGuild.channels.cache.filter(c => c.type === 'voice');
      for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  
      let go = [`discord.gg/scotts`,`${gGuild.memberCount} Members`, `${gGuild.name}`, `${count} Active Mics`, `Made by 𝐸 𝒮 𝒵#0097`]
      let plsc = ["WATCHING"]
      let Power = Math.floor(Math.random() * go.length);
  
      client.user.setActivity(go[Power], { type: plsc[Power] });
    }; setInterval(status, 5000)
  });

  const srza = require('discord.js');
const { Client } = require('command-discord');
srza.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"

client.on("ready", () => {
  function sobhan() {
        let vazyiat = ["dnd", "idle","online"] // online | dnd | idle | offline
        let godrat = Math.floor(Math.random() * vazyiat.length)
        client.user.setPresence({
        status: vazyiat[godrat] })
  }; setInterval(sobhan, 2000)
});

///// token
client.login("")
