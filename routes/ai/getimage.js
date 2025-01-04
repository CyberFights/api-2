module.exports = {
  path: "/ai/getimage",
  code: `
  $request[https://api.replicate.com/v1/predictions/$getQuery[id];;Authorization:Token $env[replicate;true]]
  $log[$getData[$default]]

  $send[200;json;$getData[$default]]
  `
}