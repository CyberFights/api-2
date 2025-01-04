module.exports = {
  path: '/events/newtrm',
  code: `
  $setVar[$getQuery[serverid]-total;0]
  $setVar[$getQuery[serverid]-current;1]
  $setVar[$getQuery[serverid]-upnext;1]
  
  $send[200;json;{"success":"true","message":"a new tag rotation match has begun"}]
  `
}