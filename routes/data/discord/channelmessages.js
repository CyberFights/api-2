module.exports = {
  path: '/data/discord/channelmessages',
  code: `
  $request[https://discord.com/api/v10/channels/$getQuery[channelid]/messages;;Accept: application/json;Authorization: Bot $env[token;true]]
  $send[200;other;$getData[$default]]
  `
}