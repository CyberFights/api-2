module.exports = {
  path: '/image/guildinfo',
  code: `
  $createCanvas[1024;1616]
  $loadImage[base;path;$root[assets/images/templates/goldcardtemplate.png]]
  $drawImage[base;0;0;1024;1616]
  
  $color[#11d047]
  $font[34;Arial;bold]
  $drawText[Owner:
  ServerID:
  Server Location:
  
  Server Members Count:
  Currently Online:
  
  Server Channels Count:
  Server Roles Count:
  
  Premium Tier:
  Total Subscribers:
  
  Server Description:



  Server Features:;165;350;500;1200]
  $color[#f8f8f7]
  $font[30;Arial]
  $drawText[$getQuery[owner];$math[$measureText[Owner:;width]+165+35];354;500;100]
$drawText[$getQuery[serverid];$math[$measureText[ServerID:;width]+165+40];$math[354+$measureText[$getQuery[owner];height]+9];500;100]
$drawText[$getQuery[location];$math[$measureText[Server Location:;width]+165+70];$math[354+$measureText[$getQuery[owner];height]+$measureText[$getQuery[serverid];height]+18];500;100]
$drawText[$getQuery[memberscount];$math[$measureText[Server Members Count:;width]+165+90];$math[354+$measureText[$getQuery[owner];height]+$measureText[$getQuery[serverid];height]+$measureText[$getQuery[location];height]+68];500;100]
$drawText[$getQuery[online];$math[$measureText[Currently Online:;width]+165+90];$math[354+$measureText[$getQuery[owner];height]+$measureText[$getQuery[serverid];height]+$measureText[$getQuery[location];height]+$measureText[$getQuery[memberscount];height]+82];500;100]
$drawText[$getQuery[channels];$math[$measureText[Server Channels  Count:;width]+165+90];$math[354+$measureText[$getQuery[owner];height]+$measureText[$getQuery[serverid];height]+$measureText[$getQuery[location];height]+$measureText[$getQuery[memberscount];height]+$measureText[$getQuery[online];height]+127];500;100]
$drawText[$getQuery[roles];$math[$measureText[Server Roles  Count:;width]+165+90];$math[354+$measureText[$getQuery[owner];height]+$measureText[$getQuery[serverid];height]+$measureText[$getQuery[location];height]+$measureText[$getQuery[memberscount];height]+$measureText[$getQuery[online];height]+$measureText[$getQuery[channels];height]+140];500;100]

$drawText[$getQuery[premium];$math[$measureText[Premium Tier:;width]+165+90];$math[354+$measureText[$getQuery[owner];height]+$measureText[$getQuery[serverid];height]+$measureText[$getQuery[location];height]+$measureText[$getQuery[memberscount];height]+$measureText[$getQuery[online];height]+$measureText[$getQuery[channels];height]+$measureText[$getQuery[roles];height]+180];500;100]

$drawText[$getQuery[pcount];$math[$measureText[Total Subscribers:;width]+165+90];$math[354+$measureText[$getQuery[owner];height]+$measureText[$getQuery[serverid];height]+$measureText[$getQuery[location];height]+$measureText[$getQuery[memberscount];height]+$measureText[$getQuery[online];height]+$measureText[$getQuery[channels];height]+$measureText[$getQuery[roles];height]+$measureText[$getQuery[premium];height]+190];500;100]
$font[28;Arial]
$drawText[$replaceText[$getQuery[desc];null;No Description Available];185;$math[354+$measureText[$getQuery[owner];height]+$measureText[$getQuery[serverid];height]+$measureText[$getQuery[location];height]+$measureText[$getQuery[memberscount];height]+$measureText[$getQuery[online];height]+$measureText[$getQuery[channels];height]+$measureText[$getQuery[roles];height]+$measureText[$getQuery[premium];height]+$measureText[$getQuery[pcount];height]+280];700;400]
$if[$getQuery[features]!=undefined;
$font[28;Arial]
$drawText[$replaceText[$replaceText[$getQuery[features];null;No Features Available];,;, ];180;980;700;400];]

$font[34;Arial;bold]
$drawText[$getQuery[servername];170;1200;700;200;center]
$loadImage[avatar;link;$getQuery[icon]]
  $drawImage[avatar;420;132;180;180]

$send[200;canvas;$default]
  `
}