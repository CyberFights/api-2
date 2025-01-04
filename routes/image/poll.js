module.exports = {
  path: "/image/poll",
  code: `
   $if[$getQuery[id]==undefined&&$getQuery[option1]!=undefined;
  $var[id;$randomNumber[1;9999999999]]
$setVar[$get[id]-choice4;0]
  $setVar[$get[id]-choice3;0]
$setVar[$get[id]-choice2;0]
  $setVar[$get[id]-choice1;0]
  $setVar[$get[id]-options;1. $getQuery[option1]|2. $getQuery[option2]|3. $getQuery[option3]|4. $getQuery[option4]]

  $createCanvas[450;450]
  
$if[$getQuery[choice]==1;$setVar[$getQuery[id]-choice1;$math[$getVar[$getQuery[id]-choice1]+1]];]
     $if[$getQuery[choice]==2;$setVar[$getQuery[id]-choice2;$math[$getVar[$getQuery[id]-choice2]+1]];]

   $if[$getQuery[choice]==3;$setVar[$getQuery[id]-choice3;$math[$getVar[$getQuery[id]-choice3]+1]];]
  $if[$getQuery[choice]==4;$setVar[$getQuery[id]-choice4;$math[$getVar[$getQuery[id]-choice4]+1]];]
$var[total;$math[$getVar[$getQuery[id]-choice1]+$getVar[$getQuery[id]-choice2]+$getVar[$getQuery[id]-choice3]+$getVar[$getQuery[id]-choice4]]]   

$var[total4;$math[($getVar[$getQuery[id]-choice4]/$get[total])*300]]
  $var[total3;$math[($getVar[$getQuery[id]-choice3]/$get[total])*300]]
  $var[total2;$math[($getVar[$getQuery[id]-choice2]/$get[total])*300]]
  $var[total1;$math[($getVar[$getQuery[id]-choice1]/$get[total])*300]]

$loadImage[back;path;./assets/images/gradients/greywhitegradient.jpeg]

  $drawImage[back;80;50;300;260]
    $color[#000000]
  $drawRect[70;50;10;260]
$color[#000000]
$drawRect[80;60;$ternary[$getVar[$getQuery[id]-choice4]!=0;$get[total4];0];55]
  $color[#00ff00]
$drawRect[80;120;$ternary[$getVar[$getQuery[id]-choice3]!=0;$get[total3];0];55]
  $color[#1700fb]
  $drawRect[80;180;$ternary[$getVar[$getQuery[id]-choice2]!=0;$get[total2];0];55]
  
  $color[#ff0000]
  $drawRect[80;245;$ternary[$getVar[$getQuery[id]-choice1]!=0;$get[total1];0];55]
  
 $color[#ffffff]
$opacity[70]

$drawRect[0;320;460;210]
  $opacity[100]

$var[text;$split[$getVar[$getQuery[id]-options];|]]
$color[#ff0000]
  $font[18;Ariel;bold]
  $drawText[$replaceText[$arrayAt[text;1];undefined;n/a];10;330;450;50]
  $color[#1700fb]
  $drawText[$replaceText[$arrayAt[text;2];undefined;n/a];10;360;450;50]
  $color[#00ff00]
  $drawText[$replaceText[$arrayAt[text;3];undefined;n/a];10;390;450;50]
$color[#000000]
$drawText[$replaceText[$arrayAt[text;4];undefined;n/a];10;420;450;50]
$font[25;Arial]
  $color[#ffffff]
  $drawText[$ternary[$getVar[$getQuery[id]-choice1]!=0;$fixed[$math[($getVar[$getQuery[id]-choice1]/$get[total])*100];1];0.0]%;$math[$get[total1]+50];275;150;100]
$drawText[$ternary[$getVar[$getQuery[id]-choice2]!=0;$fixed[$math[($getVar[$getQuery[id]-choice2]/$get[total])*100];1];0.0]%;$math[$get[total2]+50];210;150;100]
$drawText[$ternary[$getVar[$getQuery[id]-choice3]!=0;$fixed[$math[($getVar[$getQuery[id]-choice3]/$get[total])*100];1];0.0]%;$math[$get[total3]+50];140;150;100]

  $drawText[$ternary[$getVar[$getQuery[id]-choice4]!=0;$fixed[$math[($getVar[$getQuery[id]-choice4]/$get[total])*100];1];0.0]%;$math[$get[total4]+50];60;150;100]


  
  $send[200;$ternary[$getQuery[id]!=undefined;canvas;json];$ternary[$getQuery[id]!=undefined;$default;{
  "id": "$get[id]"
  }]];
  
  $createCanvas[450;450]
  
$if[$getQuery[choice]==1;$setVar[$getQuery[id]-choice1;$math[$getVar[$getQuery[id]-choice1]+1]];]
     $if[$getQuery[choice]==2;$setVar[$getQuery[id]-choice2;$math[$getVar[$getQuery[id]-choice2]+1]];]

   $if[$getQuery[choice]==3;$setVar[$getQuery[id]-choice3;$math[$getVar[$getQuery[id]-choice3]+1]];]
  $if[$getQuery[choice]==4;$setVar[$getQuery[id]-choice4;$math[$getVar[$getQuery[id]-choice4]+1]];]
$var[total;$math[$getVar[$getQuery[id]-choice1]+$getVar[$getQuery[id]-choice2]+$getVar[$getQuery[id]-choice3]+$getVar[$getQuery[id]-choice4]]]   

$var[total4;$math[($getVar[$getQuery[id]-choice4]/$get[total])*300]]
  $var[total3;$math[($getVar[$getQuery[id]-choice3]/$get[total])*300]]
  $var[total2;$math[($getVar[$getQuery[id]-choice2]/$get[total])*300]]
  $var[total1;$math[($getVar[$getQuery[id]-choice1]/$get[total])*300]]

$loadImage[back;path;./assets/images/gradients/greywhitegradient.jpeg]

  $drawImage[back;80;50;300;260]
    $color[#000000]
  $drawRect[70;50;10;260]
$color[#000000]
$drawRect[80;60;$ternary[$getVar[$getQuery[id]-choice4]!=0;$get[total4];0];55]
  $color[#00ff00]
$drawRect[80;120;$ternary[$getVar[$getQuery[id]-choice3]!=0;$get[total3];0];55]
  $color[#1700fb]
  $drawRect[80;180;$ternary[$getVar[$getQuery[id]-choice2]!=0;$get[total2];0];55]
  
  $color[#ff0000]
  $drawRect[80;245;$ternary[$getVar[$getQuery[id]-choice1]!=0;$get[total1];0];55]
  
 $color[#ffffff]
$opacity[70]

$drawRect[0;320;460;210]
  $opacity[100]

$var[text;$split[$getVar[$getQuery[id]-options];|]]
$color[#ff0000]
  $font[18;Ariel;bold]
  $drawText[$replaceText[$arrayAt[text;1];undefined;n/a];10;330;450;50]
  $color[#1700fb]
  $drawText[$replaceText[$arrayAt[text;2];undefined;n/a];10;360;450;50]
  $color[#00ff00]
  $drawText[$replaceText[$arrayAt[text;3];undefined;n/a];10;390;450;50]
$color[#000000]
$drawText[$replaceText[$arrayAt[text;4];undefined;n/a];10;420;450;50]
$font[25;Arial]
  $color[#ffffff]
  $drawText[$ternary[$getVar[$getQuery[id]-choice1]!=0;$fixed[$math[($getVar[$getQuery[id]-choice1]/$get[total])*100];1];0.0]%;$math[$get[total1]+50];275;150;100]
$drawText[$ternary[$getVar[$getQuery[id]-choice2]!=0;$fixed[$math[($getVar[$getQuery[id]-choice2]/$get[total])*100];1];0.0]%;$math[$get[total2]+50];210;150;100]
$drawText[$ternary[$getVar[$getQuery[id]-choice3]!=0;$fixed[$math[($getVar[$getQuery[id]-choice3]/$get[total])*100];1];0.0]%;$math[$get[total3]+50];140;150;100]

  $drawText[$ternary[$getVar[$getQuery[id]-choice4]!=0;$fixed[$math[($getVar[$getQuery[id]-choice4]/$get[total])*100];1];0.0]%;$math[$get[total4]+50];60;150;100]


  
  $send[200;$ternary[$getQuery[id]!=undefined;canvas;json];$ternary[$getQuery[id]!=undefined;$default;{
  "id": "$get[id]"
  }]]]
  
  `
}