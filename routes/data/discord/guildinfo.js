module.exports = {
  path: '/data/discord/guildinfo',
  code: `
  $request[https://discord.com/api/v10/guilds/$getQuery[guildid];;Accept: application/json;Authorization: Bot $env[token;true]]
  
  $send[200;json;{
  "Guild": {
  "id": "$getData[id]",
  "name": "$getData[name]",
  "owner": "$getData[owner_id]",
  "icon": "$getData[icon]",
  "desc": "$getData[description]",
  "splash": "https://cdn.discordapp.com/splashes/$getData[splash]",
  "discovSplash": "$getData[discovery_splash]",
  "features": $getData[features],
  "vanity": "$getData[vanity_url_code]",
  "maxMem": "$getData[max_members]",
  "verificationLevel": "$getData[verification_level]",
  "premium": "$getData[premium_tier]",
  "premSubscribe": "$getData[premium_subscription_count]",
  "premBarEnabled": "$getData[premium_progress_bar_enabled]",
  "messageNotifications": "$ternary[$getData[default_message_notifications]==1;all messages;$ternary[$getData[default_message_notifications]==2;only @mentions;$ternary[$getData[default_message_notifications]==3;no messages;]]]",
  "location": "$getData[region]",
  "updateschannel": "$getData[public_updates_channel_id]"
  "rulesChan": "$getData[rules_channel_id]",
  "nsfw": "$getData[nsfw]",
  "nsfwlevel": "$getData[nsfw_level]"
  }
  }]
  $var[roles;$getData[roles]]
$log[$getData[$default]] 
  `
}