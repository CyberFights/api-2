module.exports = {
  path: '/botmatch/pull',
  code: `
  $var[text;$replaceText[$replaceText[$replaceText[$readFile[./assets/botmatch/$getQuery[name]_vs_Skynet_$getVar[$getQuery[name]].txt];$getQuery[name]:;@rightINST@left ];€; @right/INST@left];Skynet:;]]
    $send[200;other;$get[text]]

  `
}