module.exports = {
  path: '/stories/extracted',
  method: 'GET',
  code: `
  $loadImage[image;link;$getQuery[image]]
  $downloadImage[image;$root[assets/images/downloaded;image.png]]
  
$var[text1;$jsEval[true;const Tesseract = require('tesseract.js');
Tesseract.recognize(
  '$getQuery[image]',
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  return text;
})]]
$if[$fileExists[./assets/stories/$getQuery[title].txt]!=true;
  $var[content;$get[text1]]
  $writeFile[./assets/stories/$getQuery[title].txt;$get[content]];$appendFile[./assets/stories/$getQuery[title].txt;$get[content]]]
  $if[$getQuery[complete]==yes;$request[https://discord.com/api/webhooks/880419706190827550/IsLrmxgNhYliS7A90Ii8JQ5tRS5d-AAkXqiaQbzskyyjngjRHt8Dl_oPagz7NlqiGJS5;{
    method: 'POST',
    data: { embeds: [{type: '1', title: 'A new match has been posted!', description: '$getQuery[title] read it here https://shadows-api-v2.shadowsnemesis.repl.co/stories/read?title=$encodeURI[$getQuery[title]]'}] },
    logError: true
}]

  $send[200;json;{
  "success": "true",
  "message": "story created",
  "link": "https://shadows-api-v2.shadowsnemesis.repl.co/stories/read/$getQuery[title]"
  }];$send[200;json;{
  "success": "false",
  "message": "a story with that name already exists"
  }]]
  `
}