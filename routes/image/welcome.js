module.exports = {
  path: '/image/welcome',
  code: `
  $createCanvas[2048;2048]
  $if[$getQuery[background]!=undefined;
  $loadImage[back;link;$getQuery[background]]
  
  $drawImage[back;0;0;2048;2048]
  ;]
  
  $drawRect[490;375;1025;1025;450;450]
  
  $loadImage[avatar;link;$getQuery[avatar]]
  $opacity[85]
  $drawImage[avatar;500;390;1000;1000;450;450]
  $opacity[100]
  $loadImage[base;link;https://cdn.discordapp.com/attachments/661258334816567315/1123803431400902667/image.png]
  $drawImage[base;0;0;2048;2048]
  $registerFont[./assets/fonts/Cinzel-Medium.ttf;Mcinzel]
  
$color[#bd9b16]
  $addEffect[blur;0]
  $font[130;Mcinzel;bold]
  $drawText[$getQuery[name];430;1370;$measureText[$getQuery[name];width];$measureText[$getQuery[name];height]]

  $color[#000000]
  $addEffect[blur;0]
  $font[130;Mcinzel]
  $opacity[30]
$drawText[$getQuery[name];426;1366;$math[$measureText[$getQuery[name];width]+3];$math[$measureText[$getQuery[name];height]-2]]

$font[50;Times New Roman]
$color[#ffffff]
$opacity[100]
$drawText[$getQuery[text];60;1660;2000;1000]
  $send[200;canvas;$default]
`
}