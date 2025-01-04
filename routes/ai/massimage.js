

module.exports = {
  path: "/ai/massimage",
  code: `
  $if[$getQuery[image]!=undefined;$loadImage[image;link;$getQuery[image]] $downloadImage[image;$root[assets/images/downloaded;image.png]];]
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": { 
  "version": "27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478", 
  "input": { 
  "prompt": "$getQuery[prompt]", 
  "num_outputs": 1, 
  "guidance_scale": 7.0, 
  $ternary[$getQuery[negprompt]!=undefined;"negative_prompt": "$getQuery[negprompt]";]
  }
  }};Authorization: Token $env[replicate;true];Content-Type: application/json]
  $if[$getData[error]==;
  $var[id1;$getData[id]];$var[id1;null]]
 
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
		"version": "9936c2001faa2194a261c01381f90e65261879985476014a0a37a334593a05eb",
		"input": {
			"prompt": "$getQuery[prompt]",
			"num_outputs": 2
		}
	}
};Authorization: Token $env[replicate;true];Content-Type: application/json]
 $if[$getData[error]==;
  $var[id2;$getData[id]];$var[id2;null]]
 
  
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "25d2f75ecda0c0bed34c806b7b70319a53a1bccad3ade1a7496524f013f48983", 
 "input": { 
 "prompt": "$getQuery[prompt]", 
 "num_outputs": 1
 }
 }};Authorization: Token $env[replicate;true];Content-Type: application/json]
 $if[$getData[error]==;
  $var[id3;$getData[id]];$var[id3;null]]
 
 
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "c0259010b93e7a4102a4ba946d70e06d7d0c7dc007201af443cfc8f943ab1d3c",
 "input": { 
 "prompt": "$getQuery[prompt]",
 $ternary[$getQuery[negprompt]!=undefined;"negative_prompt": "$getQuery[negprompt]";]
 }
 }};Authorization: Token $env[replicate;true];Content-Type: application/json]
 $if[$getData[error]==;
  $var[id4;$getData[id]];$var[id4;null]]
 
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "42a996d39a96aedc57b2e0aa8105dea39c9c89d9d266caf6bb4327a1c191b061",
 "input": { 
 "prompt": "$getQuery[prompt]",
 $if[$getQuery[negprompt]!=undefined;"negative_prompt": "$getQuery[negprompt]",;]
 "num_outputs": 1,
 "guidance_scale": 7
 }
 }};Authorization: Token $env[replicate;true];Content-Type: application/json]
 $if[$getData[error]==;
  $var[id5;$getData[id]];$var[id5;null]]
 
 
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5dc3ed3c5b2",
 "input": { 
 "prompt": "$getQuery[prompt]",
 $ternary[$getQuery[negprompt]!=undefined;"negative_prompt": "$getQuery[negprompt]",;]
 "num_outputs": 2,
 "refine": "expert_ensemble_refiner",
 "high_noise_frac": 0.8$if[$getQuery[image]!=undefined;,
 "image": "https://shadows-api-v2.shadowsnemesis.repl.co/ai/loadimage",
 "prompt_strength": $ternary[$getQuery[strength]!=undefined;$getQuery[strength];0.8];]
 }
 }};Authorization: Token $env[replicate;true];Content-Type: application/json]
 $if[$getData[error]==;
  $var[id6;$getData[id]];$var[id6;null]]
 
 
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "88d89cc606f073ee7cad89dc834b3ec129a0d76bf7e6b42037c257ac4971236a",
 "input": { 
 $ternary[$getQuery[image]!=undefined;"image": "https://shadows-api-v2.shadowsnemesis.repl.co/ai/loadimage",;]
 "prompt": "$getQuery[prompt]",
$ternary[$getQuery[negprompt]!=undefined;"negative_prompt": "$getQuery[negprompt]",;]
 "width": 512,
 "height": 768,
 "num_outputs": 2,
 "guidance_scale": 5,
 "scheduler": "KarrasDPM"
 }
 }};Authorization: Token $env[replicate;true];Content-Type: application/json]
 $if[$getData[error]==;
  $var[id7;$getData[id]];$var[id7;null]]
 

  $send[200;json;{
  "data": {
"id1": "$get[id1]", 
"id2": "$get[id2]", 
"id3": "$get[id3]", 
"id4": "$get[id4]", 
"id5": "$get[id5]", 
"id6": "$get[id6]", 
"id7": "$get[id7]"
}
}]
  `
}