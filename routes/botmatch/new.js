module.exports = {
  path: '/botmatch/new',
  code: `
  $if[$fileExists[./assets/botmatch/$getQuery[name]_vs_Skynet_0.txt]!=true;
  $setVar[$getQuery[name];0]
  $writeFile[./assets/botmatch/$getQuery[name]_vs_Skynet_0.txt;$getQuery[content]];
  $var[num;$math[1+$getVar[$getQuery[name]]]]
  $setVar[$getQuery[name];$get[num]]
  $writeFile[./assets/botmatch/$getQuery[name]_vs_Skynet_$get[num].txt;$getQuery[content]]]
  $send[200;json;{"success": "true"}]
  `
}