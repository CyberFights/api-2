module.exports = {
  path: '/data/discord/listmembers',
  code: `
  $request[https://discord.com//api/v10/guilds/$getQuery[guildid]/members?limit=1000&after=0;;Accept: application/json;Authorization: Bot $getQuery[token]]
  $send[200;other;$getData[$default]]
  `
}
