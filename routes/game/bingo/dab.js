module.exports = {
  path: '/game/bingo/dab',
  code: `
  $if[$hasText[$getVar[$getQuery[gameid]-B];$getVar[$getQuery[userid]-B1].1]==true;$setVar[$getQuery[userid]-1B;true];$setVar[$getQuery[userid]-1B;false]]
$if[$hasText[$getVar[$getQuery[gameid]-B];$getVar[$getQuery[userid]-B2].1]==true;$setVar[$getQuery[userid]-2B;true];$setVar[$getQuery[userid]-2B;false]]
$if[$hasText[$getVar[$getQuery[gameid]-B];$getVar[$getQuery[userid]-B3].1]==true;$setVar[$getQuery[userid]-3B;true];$setVar[$getQuery[userid]-3B;false]]
$if[$hasText[$getVar[$getQuery[gameid]-B];$getVar[$getQuery[userid]-B4].1]==true;$setVar[$getQuery[userid]-4B;true];$setVar[$getQuery[userid]-4B;false]]
$if[$hasText[$getVar[$getQuery[gameid]-B];$getVar[$getQuery[userid]-B5].1]==true;$setVar[$getQuery[userid]-5B;true];$setVar[$getQuery[userid]-5B;false]]
$if[$hasText[$getVar[$getQuery[gameid]-I];$getVar[$getQuery[userid]-I1].1]==true;$setVar[$getQuery[userid]-1I;true];$setVar[$getQuery[userid]-1I;false]]
$if[$hasText[$getVar[$getQuery[gameid]-I];$getVar[$getQuery[userid]-I2].1]==true;$setVar[$getQuery[userid]-2I;true];$setVar[$getQuery[userid]-2I;false]]
$if[$hasText[$getVar[$getQuery[gameid]-I];$getVar[$getQuery[userid]-I3].1]==true;$setVar[$getQuery[userid]-3I;true];$setVar[$getQuery[userid]-3I;false]]
$if[$hasText[$getVar[$getQuery[gameid]-I];$getVar[$getQuery[userid]-I4].1]==true;$setVar[$getQuery[userid]-4I;true];$setVar[$getQuery[userid]-4I;false]]
$if[$hasText[$getVar[$getQuery[gameid]-I];$getVar[$getQuery[userid]-I5].1]==true;$setVar[$getQuery[userid]-5I;true];$setVar[$getQuery[userid]-5I;false]]
$if[$hasText[$getVar[$getQuery[gameid]-N];$getVar[$getQuery[userid]-N1].1]==true;$setVar[$getQuery[userid]-1N;true];$setVar[$getQuery[userid]-1N;false]]
$if[$hasText[$getVar[$getQuery[gameid]-N];$getVar[$getQuery[userid]-N2].1]==true;$setVar[$getQuery[userid]-2N;true];$setVar[$getQuery[userid]-2N;false]]
$if[$hasText[$getVar[$getQuery[gameid]-N];$getVar[$getQuery[userid]-N3].1]==true;$setVar[$getQuery[userid]-3N;true];$setVar[$getQuery[userid]-3N;false]]
$if[$hasText[$getVar[$getQuery[gameid]-N];$getVar[$getQuery[userid]-N4].1]==true;$setVar[$getQuery[userid]-4N;true];$setVar[$getQuery[userid]-4N;false]]
$if[$hasText[$getVar[$getQuery[gameid]-N];$getVar[$getQuery[userid]-N5].1]==true;$setVar[$getQuery[userid]-5N;true];$setVar[$getQuery[userid]-5N;false]]
$if[$hasText[$getVar[$getQuery[gameid]-G];$getVar[$getQuery[userid]-G1].1]==true;$setVar[$getQuery[userid]-1G;true];$setVar[$getQuery[userid]-1G;false]]
$if[$hasText[$getVar[$getQuery[gameid]-G];$getVar[$getQuery[userid]-G2].1]==true;$setVar[$getQuery[userid]-2G;true];$setVar[$getQuery[userid]-2G;false]]
$if[$hasText[$getVar[$getQuery[gameid]-G];$getVar[$getQuery[userid]-G3].1]==true;$setVar[$getQuery[userid]-3G;true];$setVar[$getQuery[userid]-3G;false]]
$if[$hasText[$getVar[$getQuery[gameid]-G];$getVar[$getQuery[userid]-G4].1]==true;$setVar[$getQuery[userid]-4G;true];$setVar[$getQuery[userid]-4G;false]]
$if[$hasText[$getVar[$getQuery[gameid]-G];$getVar[$getQuery[userid]-G5].1]==true;$setVar[$getQuery[userid]-5G;true];$setVar[$getQuery[userid]-5G;false]]
$if[$hasText[$getVar[$getQuery[gameid]-O];$getVar[$getQuery[userid]-O1].1]==true;$setVar[$getQuery[userid]-1O;true];$setVar[$getQuery[userid]-1O;false]]
$if[$hasText[$getVar[$getQuery[gameid]-O];$getVar[$getQuery[userid]-O2].1]==true;$setVar[$getQuery[userid]-2O;true];$setVar[$getQuery[userid]-2O;false]]
$if[$hasText[$getVar[$getQuery[gameid]-O];$getVar[$getQuery[userid]-O3].1]==true;$setVar[$getQuery[userid]-3O;true];$setVar[$getQuery[userid]-3O;false]]
$if[$hasText[$getVar[$getQuery[gameid]-O];$getVar[$getQuery[userid]-O4].1]==true;$setVar[$getQuery[userid]-4O;true];$setVar[$getQuery[userid]-4O;false]]
$if[$hasText[$getVar[$getQuery[gameid]-O];$getVar[$getQuery[userid]-O5].1]==true;$setVar[$getQuery[userid]-5O;true];$setVar[$getQuery[userid]-5O;false]]

$send[200;json;{
"image": "https://shadows-api-v2.shadowsnemesis.repl.co/game/bingo/bingocardimage?userid=$getQuery[userid]"
}]
  `
}
