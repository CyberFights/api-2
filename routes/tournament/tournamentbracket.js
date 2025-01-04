module.exports = {
  path: '/tournament/tournamentbracket',
  code: `
  $createCanvas[1600;960]
  $loadImage[base;path;./assets/images/templates/tournamentbracket.png]
  $drawImage[base;-200;0;2000;1000]
  $color[#000000]
  $font[19;Arial;bold]
  $if[$getVar[$getQuery[serverid]-tournamentround]!=0;
 $drawText[$getVar[$getQuery[serverid]-1];68;238;200;100]
$drawText[$getVar[$getQuery[serverid]-2];68;318;200;100] $drawText[$getVar[$getQuery[serverid]-3];68;403;200;100]  $drawText[$getVar[$getQuery[serverid]-4];68;483;200;100]
$drawText[$getVar[$getQuery[serverid]-5];68;573;200;100]
$drawText[$getVar[$getQuery[serverid]-6];68;653;200;100]
$drawText[$getVar[$getQuery[serverid]-7];68;738;200;100]
$drawText[$getVar[$getQuery[serverid]-8];68;818;200;100]
$drawText[$getVar[$getQuery[serverid]-9];1413;238;200;100]
$drawText[$getVar[$getQuery[serverid]-10];1413;318;200;100]
$drawText[$getVar[$getQuery[serverid]-11];1413;403;200;100]
$drawText[$getVar[$getQuery[serverid]-12];1413;483;200;100]
$drawText[$getVar[$getQuery[serverid]-13];1413;573;200;100]
$drawText[$getVar[$getQuery[serverid]-14];1413;653;200;100]
$drawText[$getVar[$getQuery[serverid]-15];1413;738;200;100]
$drawText[$getVar[$getQuery[serverid]-16];1413;818;200;100];]
  
  $ignore[round 2]
  $if[$getVar[$getQuery[serverid]-tournamentround]>1;
    $drawText[$getVar[$getQuery[serverid]-q1];318;318;200;100]
$drawText[$getVar[$getQuery[serverid]-q2];318;393;200;100]
$drawText[$getVar[$getQuery[serverid]-q3];318;653;200;100]
$drawText[$getVar[$getQuery[serverid]-q4];318;733;200;100]
$drawText[$getVar[$getQuery[serverid]-q5];1153;318;200;100]
$drawText[$getVar[$getQuery[serverid]-q6];1153;393;200;100]
$drawText[$getVar[$getQuery[serverid]-q7];1153;653;200;100]
$drawText[$getVar[$getQuery[serverid]-q8];1153;733;200;100];]

  $ignore[round 3]
  $if[$getVar[$getQuery[serverid]-tournamentround]>2;
  $drawText[$getVar[$getQuery[serverid]-s1];533;483;200;100]
$drawText[$getVar[$getQuery[serverid]-s2];533;573;200;100]
$drawText[$getVar[$getQuery[serverid]-s3];943;483;200;100]
$drawText[$getVar[$getQuery[serverid]-s4];943;573;200;100];]

  $ignore[round 4]
  $if[$getVar[$getQuery[serverid]-tournamentround]>3;$drawText[$getVar[$getQuery[serverid]-f1];753;463;200;100]
$drawText[$getVar[$getQuery[serverid]-f2];753;593;200;100];]



  
  $color[#ffffff]
  $if[$getVar[$getQuery[serverid]-tournamentround]!=0;
 $drawText[$getVar[$getQuery[serverid]-1];68;238;200;100]
$drawText[$getVar[$getQuery[serverid]-2];68;318;200;100]
$drawText[$getVar[$getQuery[serverid]-3];68;403;200;100]
$drawText[$getVar[$getQuery[serverid]-4];68;483;200;100]
  $drawText[$getVar[$getQuery[serverid]-5];68;573;200;100]
$drawText[$getVar[$getQuery[serverid]-6];68;653;200;100]
  $drawText[$getVar[$getQuery[serverid]-7];68;738;200;100]
$drawText[$getVar[$getQuery[serverid]-8];68;818;200;100]
$drawText[$getVar[$getQuery[serverid]-9];1413;238;200;100]
$drawText[$getVar[$getQuery[serverid]-10];1413;318;200;100]
$drawText[$getVar[$getQuery[serverid]-11];1413;403;200;100]
$drawText[$getVar[$getQuery[serverid]-12];1413;483;200;100]
$drawText[$getVar[$getQuery[serverid]-13];1413;573;200;100]
$drawText[$getVar[$getQuery[serverid]-14];1413;653;200;100]
$drawText[$getVar[$getQuery[serverid]-15];1413;738;200;100]
$drawText[$getVar[$getQuery[serverid]-16];1413;818;200;100];]
  
  $ignore[round 2]
  $if[$getVar[$getQuery[serverid]-tournamentround]>1;
    $drawText[$getVar[$getQuery[serverid]-q1];315;315;200;100]
$drawText[$getVar[$getQuery[serverid]-q2];315;390;200;100]
$drawText[$getVar[$getQuery[serverid]-q3];315;650;200;100]
$drawText[$getVar[$getQuery[serverid]-q4];315;730;200;100]
$drawText[$getVar[$getQuery[serverid]-q5];1150;315;200;100]
$drawText[$getVar[$getQuery[serverid]-q6];1150;390;200;100]
$drawText[$getVar[$getQuery[serverid]-q7];1150;650;200;100]
$drawText[$getVar[$getQuery[serverid]-q8];1150;730;200;100];]

  $ignore[round 3]
  $if[$getVar[$getQuery[serverid]-tournamentround]>2;
  $drawText[$getVar[$getQuery[serverid]-s1];530;480;200;100]
$drawText[$getVar[$getQuery[serverid]-s2];530;570;200;100]
  $drawText[$getVar[$getQuery[serverid]-s3];940;480;200;100]
  $drawText[$getVar[$getQuery[serverid]-s4];940;570;200;100];]

  $ignore[round 4]
  $if[$getVar[$getQuery[serverid]-tournamentround]>3;
  $drawText[$getVar[$getQuery[serverid]-f1];750;460;200;100]
  $drawText[$getVar[$getQuery[serverid]-f2];750;590;200;100];]




  $send[200;canvas;$default]
  `
}