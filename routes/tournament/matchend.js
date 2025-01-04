module.exports = {
  path: '/tournament/matchend',
  code: `
  $ternary[$getVar[$getQuery[serverid]-tournamentround]==1;$if[$getVar[$getQuery[serverid]-1]==$getQuery[name]||$getVar[$getQuery[serverid]-2]==$getQuery[name];$setVar[$getQuery[serverid]-q1;$getQuery[name]];]
$if[$getVar[$getQuery[serverid]-3]==$getQuery[name]||$getVar[$getQuery[serverid]-4]==$getQuery[name];$setVar[$getQuery[serverid]-q2;$getQuery[name]];]
$if[$getVar[$getQuery[serverid]-5]==$getQuery[name]||$getVar[$getQuery[serverid]-6]==$getQuery[name];$setVar[$getQuery[serverid]-q3;$getQuery[name]];]
$if[$getVar[$getQuery[serverid]-7]==$getQuery[name]||$getVar[$getQuery[serverid]-8]==$getQuery[name];$setVar[$getQuery[serverid]-q4;$getQuery[name]];]
$if[$getVar[$getQuery[serverid]-9]==$getQuery[name]||$getVar[$getQuery[serverid]-10]==$getQuery[name];$setVar[$getQuery[serverid]-q5;$getQuery[name]];]
$if[$getVar[$getQuery[serverid]-11]==$getQuery[name]||$getVar[$getQuery[serverid]-12]==$getQuery[name];$setVar[$getQuery[serverid]-q6;$getQuery[name]];]
$if[$getVar[$getQuery[serverid]-13]==$getQuery[name]||$getVar[$getQuery[serverid]-14]==$getQuery[name];$setVar[$getQuery[serverid]-q7;$getQuery[name]];]
$if[$getVar[$getQuery[serverid]-15]==$getQuery[name]||$getVar[$getQuery[serverid]-16]==$getQuery[name];$setVar[$getQuery[serverid]-q8;$getQuery[name]];]
$var[success;"winner": "$getQuery[name]"];$ternary[$getVar[$getQuery[serverid]-tournamentround]==2;$if[$getVar[$getQuery[serverid]-q1]==$getQuery[name]||$getVar[$getQuery[serverid]-q2]==$getQuery[name];$setVar[$getQuery[serverid]-s1;$getQuery[name]];] $if[$getVar[$getQuery[serverid]-q3]==$getQuery[name]||$getVar[$getQuery[serverid]-q4]==$getQuery[name];$setVar[$getQuery[serverid]-s2;$getQuery[name]];] $if[$getVar[$getQuery[serverid]-q5]==$getQuery[name]||$getVar[$getQuery[serverid]-q6]==$getQuery[name];$setVar[$getQuery[serverid]-s3;$getQuery[name]];] $if[$getVar[$getQuery[serverid]-q7]==$getQuery[name]||$getVar[$getQuery[serverid]-q8]==$getQuery[name];$setVar[$getQuery[serverid]-s4;$getQuery[name]];] $var[success;"winner": "$getQuery[name]"];$ternary[$getVar[$getQuery[serverid]-tournamentround]==3;$if[$getVar[$getQuery[serverid]-s1]==$getQuery[name]||$getVar[$getQuery[serverid]-s2]==$getQuery[name];$setVar[$getQuery[serverid]-f1;$getQuery[name]];] $if[$getVar[$getQuery[serverid]-s3]==$getQuery[name]||$getVar[$getQuery[serverid]-s4]==$getQuery[name];$setVar[$getQuery[serverid]-f2;$getQuery[name]];]
$var[success;"winner": "$getQuery[name]"];]]]
$send[200;json;{
$get[success]
}]
  `
}