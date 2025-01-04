module.exports = {
  path: '/data/google/image',
  code: `

$jsEval[true;(async () => {
    const google = require('googlethis');
    const images = await google.image('$getQuery[search]', { safe: false });
    if (images) (d._.vars??={})
    d._.vars['uwuwu'] = images;
})();]

$send[200;json;{data: $get[uwuwu]}]
  `
}