module.exports = {
    path: '/text/translate',
    code: `

$request[https://api-free.deepl.com/v2/translate;{
	"method": "POST",
	"data": { 
  "text": [
  "$getQuery[text]"
  ],
  "target_lang": "$getQuery[to]"
  }
  };Authorization: DeepL-Auth-Key 2533d1b4-4559-a6e0-45da-e801f5b3e650:fx;Content-Type: application/json]

$send[200;json;$getData[$default]]
`
}
