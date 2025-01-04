module.exports = {
  path: '/tournament/newtournament',
  code: `
  $if[$getVar[$getQuery[serverid]-tournamentname]==null;
  $setVar[$getQuery[serverid]-tournamentname;$getQuery[name]]
  $setVar[$getQuery[serverid]-tournamentdescription;$getQuery[description]]
  $setVar[$getQuery[serverid]-tournamentcount;$getQuery[count]]
  $setVar[$getQuery[serverid]-participants;null]
  $setVar[$getQuery[serverid]-joinedcount;0]
$setVar[$getQuery[serverid]-16;null]
$setVar[$getQuery[serverid]-15;null]
$setVar[$getQuery[serverid]-14;null]
$setVar[$getQuery[serverid]-13;null]
$setVar[$getQuery[serverid]-12;null]
$setVar[$getQuery[serverid]-11;null]
$setVar[$getQuery[serverid]-10;null]
$setVar[$getQuery[serverid]-9;null]
$setVar[$getQuery[serverid]-8;null]
$setVar[$getQuery[serverid]-7;null]
$setVar[$getQuery[serverid]-6;null]
$setVar[$getQuery[serverid]-5;null]
$setVar[$getQuery[serverid]-4;null]
$setVar[$getQuery[serverid]-3;null]
$setVar[$getQuery[serverid]-2;null]
$setVar[$getQuery[serverid]-1;null]
$setVar[$getQuery[serverid]-q8;null]
$setVar[$getQuery[serverid]-q7;null]
$setVar[$getQuery[serverid]-q6;null]
$setVar[$getQuery[serverid]-q5;null]
$setVar[$getQuery[serverid]-q4;null]
$setVar[$getQuery[serverid]-q3;null]
$setVar[$getQuery[serverid]-q2;null]
$setVar[$getQuery[serverid]-q1;null]
$setVar[$getQuery[serverid]-s4;null]
$setVar[$getQuery[serverid]-s3;null]
$setVar[$getQuery[serverid]-s2;null]
$setVar[$getQuery[serverid]-s1;null]
$setVar[$getQuery[serverid]-f2;null]
$setVar[$getQuery[serverid]-f1;null]

  
  $var[success;"created": "success",
  "name": "$getVar[$getQuery[serverid]-tournamentname]",
  "count": "$getVar[$getQuery[serverid]-tournamentcount]",
  "description": "$getVar[$getQuery[serverid]-tournamentdescription]",
  "bracket": "https://shadows-api-v2.shadowsnemesis.repl.co/tournament/tournamentbracket?serverid=$getQuery[serverid]",
  "count": "$getVar[$getQuery[serverid]-joinedcount]"];$var[success;"created": "false",
  "description": "there is a tournament taking place. Complete that first before creating a new one"]]
  $send[200;json;{
  $get[success]
  }]
  `
}