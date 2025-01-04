module.exports = {
  path: '/data/calendar/changecalendar',
  code: `
  $setVar[$getQuery[userid]-$getQuery[day]$getQuery[hour];$getQuery[info]]
  $setVar[$getQuery[userid]-$getQuery[day]time$getQuery[hour];$getQuery[amount]]
  $send[200;json;{
  "success": "true",
  "image": "https://shadows-api-v2.shadowsnemesis.repl.co/data/calendar/calendarimage?userid=$getQuery[userid]"
  }]
  `
}