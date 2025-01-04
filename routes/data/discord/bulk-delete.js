module.exports = {
  path: '/data/discord/bulk-delete',
  code: `
  $request[https://discord.com/api/v10/channels/$getQuery[channelid]/messages;;Accept: application/json;Authorization: Bot $env[token;true]]
  
  $var[ids;$getData[[0][0].id]”,”$getData[[0][1].id]”,”$getData[[0][2].id]”,”$getData[[0][3].id]”,”$getData[[0][4].id]”,”$getData[[0][5].id]”,”$getData[[0][6].id]”,”$getData[[0][7].id]”,”$getData[[0][8].id]”,”$getData[[0][9].id]”,”$getData[[0][10].id]”,”$getData[[0][11].id]”,”$getData[[0][12].id]”,”$getData[[0][13].id]”,”$getData[[0][14].id]”,”$getData[[0][15].id]”,”$getData[[0][16].id]”,”$getData[[0][17].id]”,”$getData[[0][18].id]”,”$getData[[0][19].id]”,”$getData[[0][20].id]”,”$getData[[0][21].id]”,”$getData[[0][22].id]”,”$getData[[0][23].id]”,”$getData[[0][24].id]”,”$getData[[0][25].id]”,”$getData[[0][26].id]”,”$getData[[0][27].id]”,”$getData[[0][28].id]”,”$getData[[0][29].id]”,”$getData[[0][30].id]”,”$getData[[0][31].id]”,”$getData[[0][32].id]”,”$getData[[0][33].id]”,”$getData[[0][34].id]”,”$getData[[0][35].id]”,”$getData[[0][36].id]”,”$getData[[0][37].id]”,”$getData[[0][38].id]”,”$getData[[0][39].id]”,”$getData[[0][40].id]”,”$getData[[0][41].id]”,”$getData[[0][42].id]”,”$getData[[0][43].id]”,”$getData[[0][44].id]”,”$getData[[0][45].id]”,”$getData[[0][46].id]”,”$getData[[0][47].id]”,”$getData[[0][48].id]”,”$getData[[0][49].id]”,”$getData[[0][50].id]”,”$getData[[0][51].id]”,”$getData[[0][52].id]”,”$getData[[0][53].id]”,”$getData[[0][54].id]”,”$getData[[0][55].id]”,”$getData[[0][56].id]”,”$getData[[0][57].id]”,”$getData[[0][58].id]”,”$getData[[0][59].id]”,”$getData[[0][60].id]”,”$getData[[0][61].id]”,”$getData[[0][62].id]”,”$getData[[0][63].id]”,”$getData[[0][64].id]”,”$getData[[0][65].id]”,”$getData[[0][66].id]”,”$getData[[0][67].id]”,”$getData[[0][68].id]”,”$getData[[0][69].id]”,”$getData[[0][70].id]”,”$getData[[0][71].id]”,”$getData[[0][72].id]”,”$getData[[0][73].id]”,”$getData[[0][74].id]”,”$getData[[0][75].id]”,”$getData[[0][76].id]”,”$getData[[0][77].id]”,”$getData[[0][78].id]”,”$getData[[0][79].id]”,”$getData[[0][80].id]”,”$getData[[0][81].id]”,”$getData[[0][82].id]”,”$getData[[0][83].id]”,”$getData[[0][84].id]”,”$getData[[0][85].id]”,”$getData[[0][86].id]”,”$getData[[0][87].id]”,”$getData[[0][88].id]”,”$getData[[0][89].id]”,”$getData[[0][90].id]”,”$getData[[0][91].id]”,”$getData[[0][92].id]”,”$getData[[0][93].id]”,”$getData[[0][94].id]”,”$getData[[0][95].id]”,”$getData[[0][96].id]”,”$getData[[0][97].id]”,”$getData[[0][98].id]”,”$getData[[0][99].id]”,”$getData[[0][100].id]”]
$var[num;$getData[[0].[$getQuery[number]].id]]
$var[split;$split[$get[ids];$get[num]]]
  $var[remove;$arrayAt[split;1]$get[num]]
  $request[https://discord.com/api/v10/channels/$getQuery[channelid]/messages/bulk-delete;{
  method: 'POST',
  data: {
  'messages': [
  "$get[remove]"
  ]
  }
  };Accept: application/json;Authorization: Bot $env[token;true]]
  $send[200;other;$getData[$default]]
  `
}