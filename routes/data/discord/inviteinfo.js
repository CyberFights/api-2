module.exports = {
  path: '/data/discord/inviteinfo',
  code: `
  $request[https://discord.com/api/v10/invites/$getQuery[code]?with_counts=true;;Accept: application/json;Authorization: Bot $env[token;true]]
  $log[$getData[$default]]
  $send[200;json;$getData[$default]]
  `
}