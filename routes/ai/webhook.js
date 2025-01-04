module.exports = {
  path: '/ai/webhook',
  code: `
  $request[https://discord.com/api/webhooks/1142154986206285844/hez3suLZwnjb_eZ_pCJhPO3ADXeBSgihnNgllFjgxVKISPc5CJWsyO4jw9YTMVusWL2M;{
  method: 'POST',
  data: {
  "type": "1",
  "embeds": [
  "image": {
  "url": "$getQuery[output]""
  }
  ]
  }
  }]
  `
}