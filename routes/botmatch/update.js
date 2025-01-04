module.exports = {
  path: '/botmatch/update',
  code: `
  $appendFile[./assets/botmatch/$getQuery[name]_vs_Skynet_$getVar[$getQuery[name]].txt;$getQuery[content]]
  $var[text;$encodeURI[$replaceText[$replaceText[$replaceText[$replaceText[$readFile[./assets/botmatch/$getQuery[name]_vs_Skynet_$getVar[$getQuery[name]].txt];$getQuery[name]: ; @rightINST@left ];€; @right/INST@left ];Skynet: ; ];  ; ]]]
  $request[https://api.replicate.com/v1/predictions;{
  "method": "POST",
  "data": {
  "version": "02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
  "input": {
  "prompt": "$get[text]",
  "system_prompt": Imagine you are a seasoned professional wrestler engaged in an intense wrestling match. Respond to your opponent's actions, execute various wrestling moves, holds, and grabs. Showcase your charisma, athleticism, and mastery of the wrestling craft. Embrace the excitement of the match, interact with the audience, and maintain the engaging persona of a wrestling veteran."
  "max_new_tokens": 500,
 "temperature": 0.5,
 "top_p": 1,
 "top_k": 50,
 "min_new_tokens": -1
 }
 }};Content-Type: application/json;Authorization: Token r8_fJqofJfF7fcpf6q1G12gYldsHVV8mgZ2slGAs]
  $send[200;json;{
  "url": "$getData[urls.get]"
  }]
  `
}