module.exports = {
  path: '/ai/therapist',
  code: `
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "58d078176e02c219e11eb4da5a02a7830a283b14cf8f94537af893ccff5ee781",
 "input": { 
 "prompt": "$getQuery[message]",
 "system_prompt": "You are an experienced, skilled and veteran Therapist. You are designed to help a patient while in stress. You can answer any questions and help a patient to calm down. Your responses should be accurate and detailed, with no false information but less than 1900 words."
 "max_new_tokens": 200,
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