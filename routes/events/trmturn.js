module.exports = {
  path: '/events/trmturn',
  code: `
  $if[$getQuery[request]==upnext;
  $var[math;$ternary[$getVar[$getQuery[serverid]-total]>$getVar[$getQuery[serverid]-current];$math[$getVar[$getQuery[serverid]-current]+1];$getVar[$getQuery[serverid]-trm1]]]
  $var[name;$getVar[$getQuery[serverid]-trm$get[math]]];]
  
  $if[$getQuery[request]==next;
  $ternary[$getVar[$getQuery[serverid]-total]>$getVar[$getQuery[serverid]-current];$setVar[$getQuery[serverid]-current;$math[$getVar[$getQuery[serverid]-current]+1]];$setVar[$getQuery[serverid]-current;1]]
  $var[name;$getVar[$getQuery[serverid]-trm$getVar[$getQuery[serverid]-current]]];]
  
  $send[200;json;{"name":"$get[name]"}]
  
  `
}