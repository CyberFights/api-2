module.exports = {
  path: '/tournament/tournamentbracket',
  code: `
  $createCanvas[1600;960]
  $loadImage[base;path;./assets/images/templates/tournamentbracket.png]
  $drawImage[base;-200;0;2000;1000]
  $color[#000000]
  $font[19;Arial;bold]
  $if[$getQuery[round]>0;
 $drawText[$getQuery[name1];68;238;200;100]
$drawText[$getQuery[name2];68;318;200;100] 
$drawText[$getQuery[name3];68;403;200;100]  
$drawText[$getQuery[name4];68;483;200;100]
$drawText[$getQuery[name5];68;573;200;100]
$drawText[$getQuery[name6];68;653;200;100]
$drawText[$getQuery[name7];68;738;200;100]
$drawText[$getQuery[name8];68;818;200;100]
$drawText[$getQuery[name9];1413;238;200;100]
$drawText[$getQuery[name10];1413;318;200;100]
$drawText[$getQuery[name11];1413;403;200;100]
$drawText[$getQuery[name12];1413;483;200;100]
$drawText[$getQuery[name13];1413;573;200;100]
$drawText[$getQuery[name14];1413;653;200;100]
$drawText[$getQuery[name15];1413;738;200;100]
$drawText[$getQuery[name16];1413;818;200;100];]
  
  $ignore[round 2]
  $if[$getQuery[round]>1;
    $drawText[$getQuery[q1];318;318;200;100]
$drawText[$getQuery[q2];318;393;200;100]
$drawText[$getQuery[q3];318;653;200;100]
$drawText[$getQuery[q4];318;733;200;100]
$drawText[$getQuery[q5];1153;318;200;100]
$drawText[$getQuery[q6];1153;393;200;100]
$drawText[$getQuery[q7];1153;653;200;100]
$drawText[$getQuery[q8];1153;733;200;100];]

  $ignore[round 3]
  $if[$getQuery[round]>2;
  $drawText[$getQuery[s1];533;483;200;100]
$drawText[$getQuery[s2];533;573;200;100]
$drawText[$getQuery[s3];943;483;200;100]
$drawText[$getQuery[s4];943;573;200;100];]

  $ignore[round 4]
  $if[$getQuery[round]>3;$drawText[$getQuery[f1];753;463;200;100]
$drawText[$getQuery[f2];753;593;200;100];]



  
  $color[#ffffff]
  $if[$getQuery[round]!=0;
 $drawText[$getQuery[name1];68;238;200;100]
$drawText[$getQuery[name2];68;318;200;100]
$drawText[$getQuery[name3];68;403;200;100]
$drawText[$getQuery[name4];68;483;200;100]
  $drawText[$getQuery[name5];68;573;200;100]
$drawText[$getQuery[name6];68;653;200;100]
  $drawText[$getQuery[name7];68;738;200;100]
$drawText[$getQuery[name8];68;818;200;100]
$drawText[$getQuery[name9];1413;238;200;100]
$drawText[$getQuery[name10];1413;318;200;100]
$drawText[$getQuery[name11];1413;403;200;100]
$drawText[$getQuery[name12];1413;483;200;100]
$drawText[$getQuery[name13];1413;573;200;100]
$drawText[$getQuery[name14];1413;653;200;100]
$drawText[$getQuery[name15];1413;738;200;100]
$drawText[$getQuery[name16];1413;818;200;100];]
  
  $ignore[round 2]
  $if[$getQuery[nametournamentround]>1;
    $drawText[$getQuery[q1];315;315;200;100]
$drawText[$getQuery[q2];315;390;200;100]
$drawText[$getQuery[q3];315;650;200;100]
$drawText[$getQuery[q4];315;730;200;100]
$drawText[$getQuery[q5];1150;315;200;100]
$drawText[$getQuery[q6];1150;390;200;100]
$drawText[$getQuery[q7];1150;650;200;100]
$drawText[$getQuery[q8];1150;730;200;100];]

  $ignore[round 3]
  $if[$getQuery[round]>2;
  $drawText[$getQuery[s1];530;480;200;100]
$drawText[$getQuery[s2];530;570;200;100]
  $drawText[$getQuery[s3];940;480;200;100]
  $drawText[$getQuery[s4];940;570;200;100];]

  $ignore[round 4]
  $if[$getQuery[round]>3;
  $drawText[$getQuery[f1];750;460;200;100]
  $drawText[$getQuery[f2];750;590;200;100];]




  $send[200;canvas;$default]
  `
}
