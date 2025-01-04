module.exports = {
  path: '/ai/fightimage',
  code: `
  $createCanvas[380;640]
  $loadImage[skynet;path;./assets/images/skynet/skynet.png]
  $drawImage[skynet;0;0;380;640]

  $if[$getVar[botarms-$getQuery[userid]]<85&&$getVar[botarms-$getQuery[userid]]>55;$loadImage[arms;path./assets/images/skynet/skynetarmsorange.png]
  $drawImage[arms;0;0;380;640];]
  $if[$getVar[botarms-$getQuery[userid]]<55;$loadImage[arms;path./assets/images/skynet/skynetarmsred.png]
  $drawImage[arms;0;0;380;640];]

  $if[$getVar[botlegs-$getQuery[userid]]<85&&$getVar[botlegs-$getQuery[userid]]>55;$loadImage[legs;path./assets/image/skynet/skynetlegsorange.png]
  $drawImage[legs;0;0;380;640];]
  $if[$getVar[botlegs-$getQuery[userid]]<55;$loadImage[legs;path./assets/images/skynet/skynetlegsred.png]
  $drawImage[legs;0;0;380;640];]
  
  $if[$getVar[bothead-$getQuery[userid]]<85&&$getVar[bothead-$getQuery[userid]]>55;$loadImage[head;path./assets/image/skynet/skynetheadorange.png]
  $drawImage[head;0;0;380;640];]
  $if[$getVar[bothead-$getQuery[userid]]<55;$loadImage[head;path./assets/images/skynet/skynetheadred.png]
  $drawImage[head;0;0;380;640];]
  
  $send[200;canvas;$default]
  `
}