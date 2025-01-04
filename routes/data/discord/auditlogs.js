module.exports = {
  path: '/guild/audit',
  code: `
  $request[https://discord.com/api/v10/guilds/$getQuery[guildid]/audit-logs?action_type=24;;Accept: application/json;Authorization: Bot $env[token;true]]
  $var[memberupdate;$getData[audit_log_entries]]
  $request[https://discord.com/api/v10/guilds/$getQuery[guildid]/audit-logs?action_type=25&user_id=$getQuery[userid];;Accept: application/json;Authorization: Bot $env[token;true]]
  $var[memberrole;$replaceText[$getData[audit_log_entries];"id":;"audit":]]
  $send[200;json;{
 "log": 
 $get[memberrole]
  }]
  }`
}