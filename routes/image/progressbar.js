module.exports = {
  path: '/image/progressbar',
  code: `
  $registerFont[./assets/fonts/VtksDura3D-P12r.ttf;dura]
  $createCanvas[400;100]
  
  $color[#000000]
  $drawRect[0;0;400;100;50]
  $if[$getQuery[color-to]==undefined;
  $color[#00ff00]
  $drawRect[0;0;$math[($getQuery[xp]/$getQuery[req])*400];100;50];$loadImage[bar;link;https://api-1-production-1161.up.railway.app/image/multigradient?color-to=$getQuery[color-to]&color-from=$getQuery[color-from]]
  $drawImage[bar;0;0;$math[($getQuery[xp]/$getQuery[req])*400];100;50]]
  
  $color[#00ff00]
  $font[25;dura]
  $drawText[$getQuery[type]: $getQuery[xp]/$getQuery[req];20;20;300;50]
  $send[200;canvas;$default]
  `
}
