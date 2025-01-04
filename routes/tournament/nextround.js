module.exports = {
  path: '/tournament/nextround',
  code: `
  $ternary[$getVar[$getQuery[serverid]-tournamentround]==1;$var[success;"round": "2",
  "matches": [
  "$getVar[$getQuery[serverid]-q1] vs $getVar[$getQuery[serverid]-q2]","$getVar[$getQuery[serverid]-q3] vs $getVar[$getQuery[serverid]-q4]", "$getVar[$getQuery[serverid]-q5] vs $getVar[$getQuery[serverid]-q6]", "$getVar[$getQuery[serverid]-q7] vs $getVar[$getQuery[serverid]-q8]"
  ]] $setVar[$getQuery[serverid]-tournamentround;2];$ternary[$getVar[$getQuery[serverid]-tournamentround]==2;$var[success;"round": "3",
  "matches": [
  "$getVar[$getQuery[serverid]-s1] vs $getVar[$getQuery[serverid]-s2]","$getVar[$getQuery[serverid]-s3] vs $getVar[$getQuery[serverid]-s4]"
  ]] $setVar[$getQuery[serverid]-tournamentround;3];$ternary[$getVar[$getQuery[serverid]-tournamentround]==3;$var[success;"round": "4",
  "matches": [
  "$getVar[$getQuery[serverid]-f1] vs $getVar[$getQuery[serverid]-f2]"
  ]] $setVar[$getQuery[serverid]-tournamentround;4];]]]
  $send[200;json;{
  $get[success]
  }]
  `
}