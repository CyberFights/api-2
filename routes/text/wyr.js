module.exports = {
  path: '/text/wyr',
  code: `
  $request[https://shadows-api-v2.shadowsnemesis.repl.co/assets/json/wyr.json]
  $var[num;$randomNumber[1;41]]
  $send[200;json;{
  "question": "$getData[$get[num]]"
  }]
  `
}