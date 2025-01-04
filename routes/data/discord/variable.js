module.exports = {
  path: '/data/discord/variable',
  code: `
  $writeFile[./assets/discord/variable.txt;$getQuery[data]]
  $send[200;json;{"success":"true"}]`
}