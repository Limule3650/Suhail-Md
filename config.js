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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/7337e52239193d0dece1d.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_55_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDksXG4gICAgICAgIDUxLFxuICAgICAgICAxODksXG4gICAgICAgIDM5LFxuICAgICAgICA2OSxcbiAgICAgICAgODYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDU5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMixcbiAgICAgICAgNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI2LFxuICAgICAgICA2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDg1LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgODQsXG4gICAgICAgIDExNixcbiAgICAgICAgNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgwLFxuICAgICAgICA5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NixcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZGJVZ2lCODRIU3BxVG9Pa0hHdlh3RzlqNkhLTllNUnhNTVI1QUE4OCtPZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibFVCd1I4bjZSYS03OUdxQlViSkhlZ1wiLFxuICBcInBob25lSWRcIjogXCJiM2NkMThiMi00YTkxLTQyNzktOTE5My0wN2QyZmZiOWY3Y2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDEyMixcbiAgICAgIDg0LFxuICAgICAgMjMyLFxuICAgICAgMjAzLFxuICAgICAgMjE2LFxuICAgICAgNjIsXG4gICAgICAyMDAsXG4gICAgICAxNjAsXG4gICAgICAyMzYsXG4gICAgICAxMjcsXG4gICAgICA1OCxcbiAgICAgIDY1LFxuICAgICAgMTYzLFxuICAgICAgMjMwLFxuICAgICAgMjM1LFxuICAgICAgNzgsXG4gICAgICAyMjMsXG4gICAgICAzNyxcbiAgICAgIDM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDI1LFxuICAgICAgMTczLFxuICAgICAgMjMzLFxuICAgICAgMTE3LFxuICAgICAgMzYsXG4gICAgICAyNSxcbiAgICAgIDIwNixcbiAgICAgIDIxNCxcbiAgICAgIDI4LFxuICAgICAgMTEyLFxuICAgICAgMTcxLFxuICAgICAgMjE1LFxuICAgICAgMTA2LFxuICAgICAgMjgsXG4gICAgICAxMzEsXG4gICAgICA2LFxuICAgICAgMTU1LFxuICAgICAgMjE2LFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhMVllMWjVWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2ODIyODE2ODA6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLIEEgTiBFIEsgSSDigKIgTEUg4oCiIE0gSSBSIEEgRyBFICDigKIgIEIgTCBBIE4gQ1wiLFxuICAgIFwibGlkXCI6IFwiMTk4NTk1NDc5NDAwNTU1OjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09YTzJ2VUdFSnl2akxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYmliVzU3SjNEM085NW9Za1I0OXdkZWpFL1JEM0w0NzJvZHAyUmpNZmhuVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqbjYzSk9vQ2lYUXU3NnJSYktaT2YvYWxYYzQ2eVc3TzJ4THlpRW9oMU1KSU1ibjdDc1hmam80dktKMlFMc3A1RzZDYVlqY2R5Z3pHOWNJNVBINmpCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHUEF5Z3dPam5TTGtRRHdMVTVpWGNIbFp4Z1dCYm5hVzEwZ0xwRG5FSE0zY1ZPbXZWTkUydm9WWldYNVBOYytubUF1Rm5LZnVlNHFKN0Y0eDhTTWxpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2ODIyODE2ODA6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4NjcyOTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBeHNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF4cy5qc29uIjogIntcImtleURhdGFcIjpcIlZOVlJybWJlVVN4eDlPTU1ZRGlKS2ZDaXRJTW1oRlpSc0RRN1FQNlNXU1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg1NzQ2NDE2NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
