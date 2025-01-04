module.exports = {
path: '/video/1player',
code: `
$send[200;other;<!DOCTYPE html>
<html lang="en">
<head>
    <title>Video Streaming</title>
</head>
<body>

    <video controls tabindex="0">
        <source src="file:///F:/wrestling/Zman vs BS.mp4"  type="video/mp4" id="video" preload="metadata">
        Your browser does not support the video tag.
    </video>
<script>
  $jsEval[false;video.addEventListener('loadedmetadata', function() {
    if (video.buffered.length === 0) return;

    const bufferedSeconds = video.buffered.end(0) - video.buffered.start(0);
    console.log(${bufferedSeconds} seconds of video are ready to play.);
  });]
</script>

</body>
</html>]
`
}