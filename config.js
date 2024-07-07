const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237693538738";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/01e819f8c15f82a8098e0.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_15_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc3LFxuICAgICAgICA0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMixcbiAgICAgICAgMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYwLFxuICAgICAgICA0NixcbiAgICAgICAgODQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NixcbiAgICAgICAgMjMxLFxuICAgICAgICA3NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgxLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDksXG4gICAgICAgIDMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDczLFxuICAgICAgICA4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDcyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDU0LFxuICAgICAgICAzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDYzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTksXG4gICAgICAgIDU2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU1LFxuICAgICAgICA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM2LFxuICAgICAgICA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAxODQsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJ2enpuNEY4aEFxRHBUQnI1TThyakpYajI5TDdCTXg2cmN6SXpySkZmQ3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM3Njg2NzI0MTM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5QzY5MjIzOTg3QTEwRkNFMTBFRUIyM0JFQ0E0QjcwQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzODY4OThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2ODY3MjQxMzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVBNEI2ODVBNTJDQzY2MzQyNTExMEU0RUM5NUY1QzBBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM4Njg5OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNzY4NjcyNDEzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjMwMzdBOTA2RDgyOUFENzBCRURBNUU5MzZCQjRFRTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMzg2OTAxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM3Njg2NzI0MTM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCODQwQTdBNDc3QzAyQzNCMjNGQjIwNjkxODc5MThCRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzODY5MDFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTVlFYkMtNm9SN0dyQ25tcG04UDUtQVwiLFxuICBcInBob25lSWRcIjogXCI3ZmVmODYxOC0xZTIyLTQ2OTYtODI5My02ZjZiYTc0MGMzYzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICAxNTIsXG4gICAgICAyNDQsXG4gICAgICA2LFxuICAgICAgNDMsXG4gICAgICAxNDMsXG4gICAgICAyNDAsXG4gICAgICAxNDIsXG4gICAgICAxOTgsXG4gICAgICA1MCxcbiAgICAgIDEwMCxcbiAgICAgIDE4MixcbiAgICAgIDE4MSxcbiAgICAgIDExNyxcbiAgICAgIDE5MixcbiAgICAgIDU5LFxuICAgICAgMTU1LFxuICAgICAgMTYsXG4gICAgICAzNCxcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjcsXG4gICAgICAxNSxcbiAgICAgIDksXG4gICAgICAxMjgsXG4gICAgICAxNDUsXG4gICAgICA1NixcbiAgICAgIDEyNCxcbiAgICAgIDEyMSxcbiAgICAgIDk1LFxuICAgICAgNjUsXG4gICAgICAzNixcbiAgICAgIDExNCxcbiAgICAgIDMsXG4gICAgICAyNDcsXG4gICAgICA4MixcbiAgICAgIDEyNyxcbiAgICAgIDI0OCxcbiAgICAgIDUyLFxuICAgICAgNDEsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDRUQTVRTDRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY4NjcyNDEzNzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2VpanVybyBBa2FzaGlcIixcbiAgICBcImxpZFwiOiBcIjI1NzU4MjU2MDIwMjg5NzoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01IUis3RURFTXlLckxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYWttMEJCVzR3eDRBY1JCR25BTDdsaTBjM3cwNVVCKzRrZU9FS3I2K2hoYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCSVBWUHFiQkJVb012eVZFNUlCUzdUUFFncThDTURWWlpVb1NaV2tNSWRzaU9jUllRUThNaEFOV1Zra044bkxQZHFWeUM3akhqZ0ZQeUkycWxQQ1BDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiNXRLTUkrdlp0WExHYnBtSzdYbjUxYWh5b1AreWQ2VUhtZEdydnBrWHlFYy8yZS81UjI0UncxazJmb2JaTFRhMVQvTWlQbDhDZG1BTDBHQkxSeTJBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2ODY3MjQxMzc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzg2ODk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRU5zXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFTnMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrZUpKZTZzb21hTDB1QlNMbHRWMUdWNVAweTltNWhETUdjVUxwbURWakNJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkxMDA5MjQ4MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMzg2ODk1MDYzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Limule Solitarus",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
