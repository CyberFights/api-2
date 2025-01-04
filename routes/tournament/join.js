module.exports = {
  path: '/tournament/join',
  code: `
  $if[$hasText[$getVar[$getQuery[serverid]-participants];$getQuery[name]]==true;$var[success;"joined": "false",
  "description": "you have already joined this tournament"];$setVar[$getQuery[serverid]-participants;$ternary[$getVar[$getQuery[serverid]-participants]==null;$getQuery[name],;$getVar[$getQuery[serverid]-participants] $getQuery[name],]]
    $setVar[$getQuery[serverid]-joinedcount;$math[$getVar[$getQuery[serverid]-joinedcount]+1]]
  $var[success;"joined": "success",
  "description": "you have successfully joined the tournamet!",
  "count": "$getVar[$getQuery[serverid]-joinedcount]"]
  $setVar[$getQuery[serverid]-$ternary[$getVar[$getQuery[serverid]-1]==null;1;$ternary[$getVar[$getQuery[serverid]-16]==null;16;$ternary[$getVar[$getQuery[serverid]-2]==null;2;$ternary[$getVar[$getQuery[serverid]-15]==null;15;$ternary[$getVar[$getQuery[serverid]-3]==null;3;$ternary[$getVar[$getQuery[serverid]-14]==null;14;$ternary[$getVar[$getQuery[serverid]-4]==null;4;$ternary[$getVar[$getQuery[serverid]-13]==null;13;$ternary[$getVar[$getQuery[serverid]-12]==null;12;$ternary[$getVar[$getQuery[serverid]-5]==null;5;$ternary[$getVar[$getQuery[serverid]-11]==null;11;$ternary[$getVar[$getQuery[serverid]-6]==null;6;$ternary[$getVar[$getQuery[serverid]-10]==null;10;$ternary[$getVar[$getQuery[serverid]-7]==null;7;$ternary[$getVar[$getQuery[serverid]-9]==null;9;$ternary[$getVar[$getQuery[serverid]-8]==null;8;]]]]]]]]]]]]]]]];$getQuery[name]]]
  $send[200;json;{
  $get[success]
  }]
  `
}