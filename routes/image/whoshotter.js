module.exports = {
  path: '/image/whoshotter',
  code: `
  $registerFont[./assets/fonts/VtksDura3D-P12r.ttf;dura]
  
  $createCanvas[750;350]
  $loadImage[base;path;./assets/images/vs/vs3.png]
  $drawImage[base;0;0;750;350]
  $loadImage[avatar1;link;$getQuery[avatar1]]
  $drawImage[avatar1;40;50;190;190]
  $loadImage[avatar2;link;$getQuery[avatar2]]
  $drawImage[avatar2;480;50;190;190]
  $addEffect[blur;0]
  $loadImage[top;path;./assets/images/vs/vs3top.png]
  $drawImage[top;0;0;750;350]
  $font[30;dura]
  $color[#000000]
  $drawText[$getQuery[name1];50;230;400;300]
  $drawText[$getQuery[name2];485;230;400;300]
  $drawText[Votes: $getQuery[vote1];50;270;400;300]
  $drawText[Votes: $getQuery[vote2];485;270;400;300]
  
  $send[200;canvas;$default]
  `
}
