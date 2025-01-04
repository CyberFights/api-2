module.exports = {
  path: '/game/bingo/play',
  code: `
  $var[letter;$random[B;I;N;G;O]]
  
  $if[$getVar[$getQuery[gameid]-$get[letter]count]!=0;
  $var[num;$getVar[$getQuery[gameid]-$get[letter]count]]
  $var[ran;$randomNumber[1;$get[num]]]
  $var[B0;$split[$getVar[$getQuery[gameid]-$get[letter]playable];,]]
$var[B1;$arrayAt[B0;$get[ran]]]
$setVar[$getQuery[gameid]-$get[letter]playable;$replaceText[$replaceText[$getVar[$getQuery[gameid]-$get[letter]playable];$get[B1];];,,;,]]
  $var[add;$getVar[$getQuery[gameid]-$get[letter]]]
  $setVar[$getQuery[gameid]-$get[letter];$get[add]$get[B1],]
  $setVar[$getQuery[gameid]-$get[letter]count;$math[$get[num]-1]];
  $var[B1;reroll]]
  
  
  
  $createCanvas[800;800]
  $loadImage[ball;path;./assets/images/balls/$ternary[$get[letter]==B;b;$ternary[$get[letter]==I;i;$ternary[$get[letter]==N;n;$ternary[$get[letter]==G;g;$ternary[$get[letter]==O;o;]]]]]ball.png]
  $drawImage[ball;0;0;800;800]
  $color[#000000]
  $font[30;Arial;bold]
  $drawText[$get[letter];390;300;50;50]
  $font[55;Arial;bold]
  $drawText[$get[B1];380;350;100;100]
  $send[200;canvas;$default]
  `
}