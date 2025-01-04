module.exports = {
  path: '/stories/new',
  method: 'POST',
  code: `
  $if[$fileExists[./assets/stories/$getQuery[title].txt]!=true;
  $writeFile[./assets/stories/$getQuery[title].txt;$getQuery[content]]
  $request[https://discord.com/api/webhooks/880419706190827550/IsLrmxgNhYliS7A90Ii8JQ5tRS5d-AAkXqiaQbzskyyjngjRHt8Dl_oPagz7NlqiGJS5;{
    method: 'POST',
    data: { embeds: [{type: 'rich', title: 'A new match has been posted!', description: '$getQuery[title] read it here https://shadows-api-v2.shadowsnemesis.repl.co/stories/read?title=$encodeURI[$getQuery[title]]'}] },
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