module.exports = {
  path: '/ai/fight',
  code: `
  
  $if[$getQuery[newmatch]==true; 
  $writeFile[./assets/botmatch/$getQuery[userid].txt;null]
  $setVar[botarms-$getQuery[userid];100]
  $setVar[botlegs-$getQuery[userid];100]
  $setVar[bothead-$getQuery[userid];100]
  $setVar[bottorso-$getQuery[userid];100]
  $setVar[botatk-$getQuery[userid];$getQuery[atk]]
  $setVar[botdef-$getQuery[userid];$getQuery[def]]
  $send[200;json;{
  "success": "true"
  }];
$set[content;@rightINST@left $getQuery[prompt] @right/INST@left]
$appendFile[./assets/botmatch/$getQuery[userid].txt;$get[content]\n]
$request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
 "input": { 
 "prompt": "$replaceText[$readFile[./assets/botmatch/$getQuery[userid].txt];null;]",
 "system_prompt": "You are an experienced, skilled and veteran wrestler. Always able to fairly respond and react to your opponent, while being safe. Your responses should be accurate and realistic moves to your opponent. You are able to counter, reverse, and attack your opponent with the intention to win, but will accept defeat."
 "max_new_tokens": 250,
 "temperature": 0.8,
 "top_p": 1,
 "top_k": 250,
 "repetition_penalty": 1,
 "repetition_penalty_sustain": 256,
 "token_repetition_penalty_decay": 128
 }
 }};Authorization: Token $env[replicate;true];Content-Type: application/json]
 
 $log[$getData[$default]]
  $send[200;json;$getData[$default]]]
  $wait[25s]
  $appendFile[./assets/botmatch/$getQuery[userid].txt;$replaceText[$replaceText[$getData[output];";];,,;,]\n]
  
  `
}