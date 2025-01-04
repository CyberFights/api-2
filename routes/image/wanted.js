module.exports = {
  path: '/image/wanted',
  code: `
  $createCanvas[512;640]
  $loadImage[avatar;link;$getQuery[avatar]?size=4096]
  $if[$getQuery[style]==1;$drawImage[avatar;15;100;500;500];$drawImage[avatar;15;0;500;650]]
  
$if[$getQuery[style]==1;$loadImage[base;path;./assets/images/wanted/wanted1.png];$loadImage[base;path;./assets/images/wanted/wanted2.png]]
  $drawImage[base;0;0;512;640]
  $send[200;canvas;$default]
  `
}