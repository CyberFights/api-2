module.exports = {
  path: '/image/removebg',
  code: `
  $request[https://api.remove.bg/v1.0/removebg;{"image_url": "$getQuery[image]"};Accept: image/*;X-API-Key: $getQuery[token];Content-Type: application/json]
  $send[200;other;$getData[$default]]
  `
}
