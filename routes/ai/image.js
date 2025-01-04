module.exports = {
  path: "/ai/image",
  code: `
$if[$getQuery[model]==undefined||$getQuery[prompt]==undefined;$send[200;json;{
"status": "error",
"reason": "missing queries",
"queries": {
"model": [
"Stable Diffusion", 
"OpenJourney", 
"erlich", 
"DALL-E", 
"Waifu Diffusion",
"Realistic",
"Anything",
"Stability sdxl",
"info",
"variation",
"image2image",
"botmatch",
"epicrealism",
"focus"
],
"prompt": "the text input",
"optional": [
"negprompt"
]
}
}];
$if[$getQuery[model]==Stable Diffusion;
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": { 
  "version": "27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478", 
  "input": { 
  "prompt": "$getQuery[prompt]", 
  "num_outputs": 1, 
  "guidance_scale": 7.0, 
  "negative_prompt": "$getQuery[negprompt]" 
  }
  }};Authorization: Token $env[replicate;true];Content-Type: application/json];]
  
 $if[$getQuery[model]==OpenJourney;
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
		"version": "9936c2001faa2194a261c01381f90e65261879985476014a0a37a334593a05eb",
		"input": {
			"prompt": "$getQuery[prompt]",
			"num_outputs": 4
		},
 "webhook": "https://shadows-globalchat.shadowsnemesis.repl.co/aiimage",
 "webhook_events_filter": ["completed"]
	}
};Authorization: Token $env[replicate;true];Content-Type: application/json];]
    
    $if[$getQuery[model]==erlich;
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
  "version": "92fa143ccefeed01534d5d6648bd47796ef06847a6bc55c0e5c5b6975f2dcdfb", 
  "input": { 
  "prompt": "$getQuery[prompt]", 
  "negative": "$getQuery[negprompt]" 
  } 
  }};Authorization: Token $env[replicate;true];Content-Type: application/json];]
  
 $if[$getQuery[model]==DALL-E;
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "2af375da21c5b824a84e1c459f45b69a117ec8649c2aa974112d7cf1840fc0ce", 
 "input": { 
 "text": "$getQuery[prompt]" 
 }
 }};Authorization: Token $env[replicate;true];Content-Type: application/json];]
 
  $if[$getQuery[model]==Waifu Diffusion;
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "25d2f75ecda0c0bed34c806b7b70319a53a1bccad3ade1a7496524f013f48983", 
 "input": { 
 "prompt": "$getQuery[prompt]", 
 "num_outputs": 4 
 }
 }};Authorization: Token $env[replicate;true];Content-Type: application/json];]
 

 $if[$getQuery[model]==Realistic;
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "c0259010b93e7a4102a4ba946d70e06d7d0c7dc007201af443cfc8f943ab1d3c",
 "input": { 
 "prompt": "$getQuery[prompt]",
 "negative_prompt": "$getQuery[negprompt]"
 },
 "webhook": "https://shadows-globalchat.shadowsnemesis.repl.co/aiimage",
 "webhook_events_filter": ["output", "completed"]
 }};Authorization: Token $env[replicate;true];Content-Type: application/json];]
 
$if[$getQuery[model]==Anything;
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "42a996d39a96aedc57b2e0aa8105dea39c9c89d9d266caf6bb4327a1c191b061",
 "input": { 
 "prompt": "$getQuery[prompt]",
 $if[$getQuery[negprompt]!=undefined;"negative_prompt": "$getQuery[negprompt]",;]
 "num_outputs": 1,
 "guidance_scale": 7
 },
 "webhook": "https://shadows-globalchat.shadowsnemesis.repl.co/aiimage",
  "webhook_events_filter": ["output", "completed"]
 }};Authorization: Token $env[replicate;true];Content-Type: application/json];]
 
 $if[$getQuery[model]==Stability sdxl;
  $ternary[$getQuery[image]!=undefined;$loadImage[image;link;$getQuery[image]] $downloadImage[image;$root[assets/images/downloaded;image.png]];]
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5dc3ed3c5b2",
 "input": { 
 "prompt": "$getQuery[prompt]",
 $ternary[$getQuery[negprompt]!=undefined;"negative_prompt": "$getQuery[negprompt]",;]
 "num_outputs": 2,
 "refine": "expert_ensemble_refiner",
 "high_noise_frac": 0.8$ternary[$getQuery[image]!=undefined;,
 "image": "https://shadows-api-v2.shadowsnemesis.repl.co/ai/loadimage";]$ternary[$getQuery[image]!=undefined;,
 "prompt_strength": $ternary[$getQuery[strength]!=undefined;$getQuery[strength];0.8];]
 },
 "webhook": "https://shadows-globalchat.shadowsnemesis.repl.co/aiimage",
 "webhook_events_filter": ["output", "completed"]
 }};Authorization: Token $env[replicate;true];Content-Type: application/json];]

  $if[$getQuery[model]==info;
  $loadImage[image;link;$getQuery[image]]
  $downloadImage[image;$root[assets/images/downloaded;image.png]]
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "4b32258c42e9efd4288bb9910bc532a69727f9acd26aa08e175713a0a857a608",
 "input": { 
 "question": "$getQuery[prompt]",
 "image": "https://shadows-api-v2.shadowsnemesis.repl.co/ai/loadimage"
 }
 }};Authorization: Token $env[replicate;true];Content-Type: application/json];]
 
 $if[$getQuery[model]==image2image;
  $loadImage[image;link;$getQuery[image]]
  $downloadImage[image;$root[assets/images/downloaded;image.png]]
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "6eb633a82ab3e7a4417d0af2e84e24b4b419c76f86f6e837824d02ae6845dc81",
 "input": { 
 "image": "https://shadows-api-v2.shadowsnemesis.repl.co/ai/loadimage",
 "prompt": "$getQuery[prompt]",
 "negative_prompt": "$getQuery[negprompt]"
 }
 }};Authorization: Token $env[replicate;true];Content-Type: application/json];]

$if[$getQuery[model]==variation;
  $loadImage[image;link;$getQuery[image]]
  $createCanvas[512;512]
  
  $downloadImage[image;$root[assets/images/downloaded;image.png]]
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "7ae7cec89324eddaf49a8ba1536c08cfee52192bfef4fdd86d2e222d8e29471d",
 "input": { 
 "input_image": "https://shadows-api-v2.shadowsnemesis.repl.co/ai/loadimage",
 "num_outputs": 2,
 "num_inference_steps": 50,
 "guidance_scale": 10
 }
 }};Authorization: Token $env[replicate;true];Content-Type: application/json];]

 $if[$getQuery[model]==prompter;
  
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "ba4130c13f3f1cd9771bc671bb13eab6ad5d839b2e55723b40742c03ef7f99ff",
 "input": { 
 "prompt": "$getQuery[prompt]",
 "max_length": 100,
 "temperature": 1,
 "repetition_penalty": 1.5
 }
 }};Authorization: Token $env[replicate;true];Content-Type: application/json];]

 $if[$getQuery[model]==botmatch;
  
$request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "58d078176e02c219e11eb4da5a02a7830a283b14cf8f94537af893ccff5ee781",
 "input": { 
 "prompt": "$getQuery[prompt]",
 "system_prompt": "You are an experienced, skilled and veteran wrestler. Always able to fairly respond and react to your opponent, while being safe. Your responses should be accurate and realistic moves to your opponent. You are able to counter, reverse, and attack your opponent with the intention to win, but will accept defeat."
 "max_new_tokens": 250,
 "temperature": 0.8,
 "top_p": 1,
 "top_k": 250,
 "repetition_penalty": 1,
 "repetition_penalty_sustain": 256,
 "token_repetition_penalty_decay": 128
 }
 }};Authorization: Token $env[replicate;true];Content-Type: application/json];]
 
 $if[$getQuery[model]==epicrealism;
  $ternary[$getQuery[image]!=undefined;$loadImage[image;link;$getQuery[image]]
$downloadImage[image;$root[assets/images/downloaded;image.png]];]
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "88d89cc606f073ee7cad89dc834b3ec129a0d76bf7e6b42037c257ac4971236a",
 "input": { 
 $ternary[$getQuery[image]!=undefined;"image": "https://shadows-api-v2.shadowsnemesis.repl.co/ai/loadimage",;]
 "prompt": "$getQuery[prompt]",
 "negative_prompt": "$getQuery[negprompt]",
 "width": 512,
 "height": 768,
 "num_outputs": 2,
 "guidance_scale": 5,
 "scheduler": "KarrasDPM"
 },
 "webhook": "https://shadows-globalchat.shadowsnemesis.repl.co/aiimage",
  "webhook_events_filter": ["output", "completed"]
 }};Authorization: Token $env[replicate;true];Content-Type: application/json];]
$if[$getQuery[model]==focus;
$request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "65c59c96f2fb45332edec7f9f740b2a4d494a5f9c43b193dc98066d15da55a8c",
 "input": { 
 "prompt": "$getQuery[prompt]",
 $ternary[$getQuery[negprompt]!=undefined;"negative_prompt": "$getQuery[negprompt]",;]
 "image_number": 2
 },
 "webhook": "https://shadows-globalchat.shadowsnemesis.repl.co/aiimage",
  "webhook_events_filter": ["completed"]
 }};Authorization: Token $env[replicate;true];Content-Type: application/json];]
 

$if[$getQuery[model]==extract;
  $loadImage[image;link;$getQuery[image]]
  $createCanvas[512;512]
  
  $downloadImage[image;$root[assets/images/downloaded;image.png]]
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "a524caeaa23495bc9edc805ab08ab5fe943afd3febed884a4f3747aa32e9cd61",
 "input": { 
 "input": "https://shadows-api-v2.shadowsnemesis.repl.co/ai/loadimage"
 }
 }};Authorization: Token $env[replicate;true];Content-Type: application/json];]
  $log[$getData[$default]]
  $send[200;json;$getData[$default]]]
  `
}