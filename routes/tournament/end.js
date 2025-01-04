module.exports = {
  path: '/tournament/end',
  code: `
    $setVar[$getQuery[serverid]-tournamentname;null]
  $setVar[$getQuery[serverid]-tournamentdescription;null]
  $setVar[$getQuery[serverid]-tournamentcount;0]
  $setVar[$getQuery[serverid]-participants;null]
  $setVar[$getQuery[serverid]-joinedcount;0]
  $send[200;json;{
  "reset": "success",
  "description": "this tournament has ended"
  }]
  `
}