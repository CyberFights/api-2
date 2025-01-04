module.exports = {
  path: '/globalchat/chat',
  code: `

$var[myArray;$split[$readFile[./assets/globalchat/webhooks.txt]; ]]
$arrayForEach[myArray;$log[$get[myArray]]]

$arrayForEach[myArray;$request[$get[myArray];{
        method: 'POST',
        data: { content: '$getQuery[message]', username: '$getQuery[name]', avatar_url: '$getQuery[avatar]' },
        logError: true
    }]]

$log[$getData[$default]]
  }
  `
}