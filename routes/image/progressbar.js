module.exports = {
  path: '/image/progressbar',
  code: `
  $createCanvas[400;200]
  
  $color[#000000]
  $drawRect[0;0;400;200;100]
  $if[$getQuery[color-to]==undefined;
  $color[#00ff00]
  $drawRect[0;0;$math[($getQuery[xp]/$getQuery[req])*400];200;100];$loadImage[bar;link;https://shadows-api.shadowsnemesis.repl.co/image/multigradient?color-to=$getQuery[color-to]&color-from=$getQuery[color-from]]
  $drawImage[bar;0;0;$math[($getQuery[xp]/$getQuery[req])*400];200;100]]
  
  $color[#ffffff]
  $font[30;Arial;bold]
  $drawText[$fixed[$math[($getQuery[xp]/$getQuery[req])*100];1]%;175;70;$measureText[$fixed[$math[($getQuery[xp]/$getQuery[req])*100];1]%;width];$measureText[$fixed[$math[($getQuery[xp]/$getQuery[req])*100];1]%;height]]
  $send[200;canvas;$default]
  `
}