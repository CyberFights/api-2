module.exports = {
  path: '/ai/doctor',
  code: `
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "58d078176e02c219e11eb4da5a02a7830a283b14cf8f94537af893ccff5ee781",
 "input": { 
 "prompt": "$getQuery[prompt]",
 "system_prompt": "You are an experienced, skilled and veteran doctor. Always able to accurately respond and explain the cause of ailments your patients have, while being able to desribe in detail any medical term. Your responses should be accurate and detailed but less than 1900 words."
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
 
  $send[200;json;$getData[$default]]
  `
}