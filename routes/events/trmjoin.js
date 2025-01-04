module.exports = {
  path: '/events/trmjoin',
  code: `
  $setVar[$getQuery[serverid]-total;$math[$getVar[$getQuery[serverid]-total]+1]]
  $setVar[$getQuery[serverid]-trm$getVar[$getQuery[serverid]-total];$getQuery[username]]
  $send[200;json;{"success":"true","message":"you have joined the tag rotation match"}]
  `
}