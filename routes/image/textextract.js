
module.exports = {
  path: '/image/textextract',
  code: `
$loadImage[image;link;$getQuery[image]]
  $downloadImage[image;$root[assets/images/downloaded;image.png]]
  
$var[text1;$jsEval[true;const Tesseract = require('tesseract.js');
Tesseract.recognize(
  '$getQuery[image]',
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  return text;
})]]
$if[$fileExists[./assets/stories/$getQuery[title].txt]!=true;$writeFile[./assets/stories/$getQuery[title].txt;$get[text1]];$appendFile[./assets/stories/$getQuery[title].txt;€$get[text1]]]

$send[200;json;{
"link": "https://shadows-api-v2.shadowsnemesis.repl.co/stories/read?title=$encodeURI[$getQuery[title]]"
}]
`}