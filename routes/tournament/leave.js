module.exports = {
  path: '/tournament/leave',
  code: `
  $ternary[$hasText[$getVar[$getQuery[serverid]-participants];$getQuery[name]]==true;$var[temp;$getVar[$getQuery[serverid]-participants]]
  $var[temp2;$replaceText[$get[temp]; $getQuery[name],;]]
  $setVar[$getQuery[serverid]-participants;$get[temp2]]
  $setVar[$getQuery[serverid]-joinedcount;$math[$getVar[$getQuery[serverid]-joinedcount]-1]]
  $if[$hasText[$getVar[$getQuery[serverid]-1];$getQuery[name]]==true;$setVar[$getQuery[serverid]-1;null];]
  $if[$hasText[$getVar[$getQuery[serverid]-2];$getQuery[name]]==true;$setVar[$getQuery[serverid]-2;null];]
  $if[$hasText[$getVar[$getQuery[serverid]-3];$getQuery[name]]==true;$setVar[$getQuery[serverid]-3;null];]
  $if[$hasText[$getVar[$getQuery[serverid]-4];$getQuery[name]]==true;$setVar[$getQuery[serverid]-4;null];]
  $if[$hasText[$getVar[$getQuery[serverid]-5];$getQuery[name]]==true;$setVar[$getQuery[serverid]-5;null];]
  
$if[$hasText[$getVar[$getQuery[serverid]-6];$getQuery[name]]==true;$setVar[$getQuery[serverid]-6;null];]
  $if[$hasText[$getVar[$getQuery[serverid]-7];$getQuery[name]]==true;$setVar[$getQuery[serverid]-7;null];]

$if[$hasText[$getVar[$getQuery[serverid]-8];$getQuery[name]]==true;$setVar[$getQuery[serverid]-8;null];]
  $if[$hasText[$getVar[$getQuery[serverid]-9];$getQuery[name]]==true;$setVar[$getQuery[serverid]-9;null];]

$if[$hasText[$getVar[$getQuery[serverid]-10];$getQuery[name]]==true;$setVar[$getQuery[serverid]-10;null];]

$if[$hasText[$getVar[$getQuery[serverid]-11];$getQuery[name]]==true;$setVar[$getQuery[serverid]-11;null];]

$if[$hasText[$getVar[$getQuery[serverid]-12];$getQuery[name]]==true;$setVar[$getQuery[serverid]-12;null];]

$if[$hasText[$getVar[$getQuery[serverid]-13];$getQuery[name]]==true;$setVar[$getQuery[serverid]-13;null];]

$if[$hasText[$getVar[$getQuery[serverid]-14];$getQuery[name]]==true;$setVar[$getQuery[serverid]-14;null];]

$if[$hasText[$getVar[$getQuery[serverid]-15];$getQuery[name]]==true;$setVar[$getQuery[serverid]-15;null];]

$if[$hasText[$getVar[$getQuery[serverid]-16];$getQuery[name]]==true;$setVar[$getQuery[serverid]-16;null];]
  
  $var[success;"leave": "success",
  "descriptipn": "you have successfully left the tournament",
  "count": "$getVar[$getQuery[serverid]-joinedcount]"];$ternary[$hasText[$getVar[$getQuery[serverid]-participants];$getQuery[name]]!=true;$var[success;"leave": "false",
  "description": "you are not part of this tournament"];]]
  $send[200;json;{
  $get[success]
  }]
  `
}