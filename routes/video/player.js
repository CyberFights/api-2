module.exports = {
path: '/video/player',
code: `
$send[200;other;<!DOCTYPE html>
<html lang="en">
<head>
  
</head>
<body>
<title>Video Streaming</title>
    <video id="video" preload="metadata" src="https://www.boyfriendtv.com/embed/197233/50339/600/400/" controls>
  <p>Your browser cannot play the provided video file.</p>
</video>
<iframe src="https://www.boyfriendtv.com/embed/197233/50339/600/400/" width="600" height="400" frameborder="0" scrolling="no"></iframe>
<br>
<iframe src="https://www.boyfriendtv.com/embed/1037005/48727/600/450/" width="600" height="450" frameborder="0" scrolling="no"></iframe>
<iframe src="https://www.boyfriendtv.com/embed/1023950/44820/600/338/" width="600" height="338" frameborder="0" scrolling="no"></iframe>
<br>
<iframe src="https://www.boyfriendtv.com/embed/1020360/1332/600/338/" width="600" height="338" frameborder="0" scrolling="no"></iframe>
<script>
 video.addEventListener('loadedmetadata', function() {
    if (video.buffered.length === 0) return;

    const bufferedSeconds = video.buffered.end(0) - video.buffered.start(0);
  });
</script>

</body>
</html>]
`
}