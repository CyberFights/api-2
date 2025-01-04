module.exports = {
  path: '/tournament/start',
  code: `
  $if[$getVar[$getQuery[serverid]-1]!=null&&$getVar[$getQuery[serverid]-2]!=null&&$getVar[$getQuery[serverid]-3]!=null&&$getVar[$getQuery[serverid]-4]!=null&&$getVar[$getQuery[serverid]-5]!=null&&$getVar[$getQuery[serverid]-6]!=null&&$getVar[$getQuery[serverid]-7]!=null&&$getVar[$getQuery[serverid]-8]!=null&&$getVar[$getQuery[serverid]-9]!=null&&$getVar[$getQuery[serverid]-10]!=null&&$getVar[$getQuery[serverid]-11]!=null&&$getVar[$getQuery[serverid]-12]!=null&&$getVar[$getQuery[serverid]-13]!=null&&$getVar[$getQuery[serverid]-14]!=null&&$getVar[$getQuery[serverid]-15]!=null&&$getVar[$getQuery[serverid]-16]!=null;$var[success;"start": "success",
  "round1": ["$getVar[$getQuery[serverid]-1] vs $getVar[$getQuery[serverid]-2]","$getVar[$getQuery[serverid]-3] vs $getVar[$getQuery[serverid]-4]","$getVar[$getQuery[serverid]-5] vs $getVar[$getQuery[serverid]-6]","$getVar[$getQuery[serverid]-7] vs $getVar[$getQuery[serverid]-8]","$getVar[$getQuery[serverid]-9] vs $getVar[$getQuery[serverid]-10]","$getVar[$getQuery[serverid]-11] vs $getVar[$getQuery[serverid]-12]","$getVar[$getQuery[serverid]-13] vs $getVar[$getQuery[serverid]-14]","$getVar[$getQuery[serverid]-15] vs $getVar[$getQuery[serverid]-16]"],
  "image": "https://shadows-api-v2.shadowsnemesis.repl.co/tournament/tournamentbracket?serverid=$getQuery[serverid]"]
  $setVar[$getQuery[serverid]-match1;$getVar[$getQuery[serverid]-1],$getVar[$getQuery[serverid]-2]]
  $setVar[$getQuery[serverid]-match2;$getVar[$getQuery[serverid]-3],$getVar[$getQuery[serverid]-4]]
  $setVar[$getQuery[serverid]-match3;$getVar[$getQuery[serverid]-5],$getVar[$getQuery[serverid]-6]]
  $setVar[$getQuery[serverid]-match4;$getVar[$getQuery[serverid]-7],$getVar[$getQuery[serverid]-8]]
  $setVar[$getQuery[serverid]-match5;$getVar[$getQuery[serverid]-9],$getVar[$getQuery[serverid]-10]]
  $setVar[$getQuery[serverid]-match6;$getVar[$getQuery[serverid]-11],$getVar[$getQuery[serverid]-12]]
  $setVar[$getQuery[serverid]-match7;$getVar[$getQuery[serverid]-13],$getVar[$getQuery[serverid]-14]]
  $setVar[$getQuery[serverid]-match8;$getVar[$getQuery[serverid]-15],$getVar[$getQuery[serverid]-16]]
  $setVar[$getQuery[serverid]-tournamentround;1];$var[success;"start": "failure",
  "round1": "not enough joined to start"]]
  $send[200;json;{
  $get[success]
  }]
  `
}