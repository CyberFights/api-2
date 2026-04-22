module.exports = {
  path: '/image/dualhp',
  code: `
  $registerFont[./assets/fonts/VtksDura3D-P12r.ttf;dura]
  $createCanvas[850;350]
  
  $color[#000000]
  $drawRect[0;0;400;100;50]
  $if[$getQuery[color-to]==undefined;
  $color[#00ff00]
  $drawRect[0;0;$math[($getQuery[xp]/$getQuery[req])*400];100;50];$loadImage[bar;link;https://api-1-production-1161.up.railway.app/image/multigradient?color-to=$getQuery[color-to]&color-from=$getQuery[color-from]]
  $drawImage[bar;0;0;$math[($getQuery[xp]/$getQuery[req])*400];100;50]]
  $if[$getQuery[xp2]!=undefined;
  $color[#000000]
  $drawRect[0;100;400;100;50]
  $loadImage[bar;link;https://api-1-production-1161.up.railway.app/image/multigradient++.?color-to=$getQuery[color-to2]&color-from=$getQuery[color-from2]]
  $drawImage[bar;0;100;$math[($getQuery[xp2]/$getQuery[req2])*400];100;50];]    $if[$getQuery[xp3]!=undefined;
  $color[#000000]'
  $drawRect[0;200;400;100;50]
  $loadImage[bar;link;https://api-1-production-1161.up.railway.app/image/multigradient?color-to=$getQuery[color-to3]&color-from=$getQuery[color-from3]]
  $drawImage[bar;0;200;$math[($getQuery[xp3]/$getQuery[req3])*400];100;50];]

  $color[#000000]
  $drawRect[450;0;400;100;50]
  $if[$getQuery[color-to4]==undefined;
  $color[#00ff00]
  $drawRect[450;0;$math[($getQuery[xp4]/$getQuery[req4])*400];100;50];$loadImage[bar;link;https://api-1-production-1161.up.railway.app/image/multigradient?color-to=$getQuery[color-to4]&color-from=$getQuery[color-from4]]
  $drawImage[bar;450;0;$math[($getQuery[xp4]/$getQuery[req4])*400];100;50]]
 
  $if[$getQuery[xp5]!=undefined;
  $color[#000000]
  $drawRect[450;100;400;100;50]
  $loadImage[bar;link;https://api-1-production-1161.up.railway.app/image/multigradient?color-to=$getQuery[color-to5]&color-from=$getQuery[color-from5]]
  $drawImage[bar;450;100;$math[($getQuery[xp5]/$getQuery[req5])*400];100;50];]
    
  $if[$getQuery[xp6]!=undefined;
  $color[#000000]
  $drawRect[450;200;400;100;50]
  $loadImage[bar;link;https://api-1-production-1161.up.railway.app/image/multigradient?color-to=$getQuery[color-to6]&color-from=$getQuery[color-from6]]
  $drawImage[bar;450;200;$math[($getQuery[xp6]/$getQuery[req6])*400];100;50];]
  
  $color[#00ff00]
  $font[25;dura]
  $drawText[$getQuery[type]: $getQuery[xp]/$getQuery[req];20;20;300;50]
  $send[200;canvas;$default]
  `
}