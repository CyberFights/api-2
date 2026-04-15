module.exports = {
  path: '/image/progressbar',
  code: `
  $createCanvas[400;100]
  
  $color[#000000]
  $drawRect[0;0;400;100;50]
  $if[$getQuery[color-to]==undefined;
  $color[#00ff00]
  $drawRect[0;0;$math[($getQuery[xp]/$getQuery[req])*400];100;50];$loadImage[bar;link;https://api-1-production-1161.up.railway.app/image/multigradient?color-to=$getQuery[color-to]&color-from=$getQuery[color-from]]
  $drawImage[bar;0;0;$math[($getQuery[xp]/$getQuery[req])*400];100;50]]
  
  $color[#00ff00]
  $font[15;Arial;bold]
  $drawText[$getQuery[type]: $getQuery[xp]/$getQuery[req];10;10;300;200]
  $send[200;canvas;$default]
  `
}
