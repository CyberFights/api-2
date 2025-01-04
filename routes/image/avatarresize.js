module.exports = {
  path: '/image/avatarresize',
  code: `
  $createCanvas[108;108]
  $var[image;$getQuery[image]]
  $loadImage[base;link;$get[image]]
  $drawImage[base;0;0;108;108]
  $send[200;canvas;$default]
  `
}