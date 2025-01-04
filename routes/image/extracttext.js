module.exports = {
  path: '/image/extracttext',
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
$send[200;other;$get[text1]]
`
}