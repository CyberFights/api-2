module.exports = {
  path: '/ai/chat',
  code: `
  $request[https://api.replicate.com/v1/predictions;{
	"method": "POST",
	"data": {
 "version": "6282abe6a492de4145d7bb601023762212f9ddbbe78278bd6771c8b3b2f2a13b",
 "input": { 
 "prompt": "$getQuery[prompt]",
 "max_length": 500,
 "top_p": 1,
 "repetition_penalty": 1
 }
 }};Authorization: Token $env[replicate;true];Content-Type: application/json]
 
 $log[$getData[$default]]
 
  $send[200;json;$getData[$default]]
  `
}

