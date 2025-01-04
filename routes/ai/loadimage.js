module.exports = {
  path: '/ai/loadimage',
  code: `
  $createCanvas[512;512]
  $loadImage[image;path;$root[assets/images/downloaded/image.png]]
  $drawImage[image;0;0;512;512]
  $send[200;canvas;$default]
  `
}