module.exports = {
  path: '/data/discord/messages',
  code: `
  $request[https://discord.com/api/v10/channels/$getQuery[channelid]/messages/$getQuery[messageid];;Accept: application/json;Authorization: Bot $getQuery[token]]
  $send[200;other;$getData[$default]]
  `
}