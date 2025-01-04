module.exports = {
path: '/botmatch/read',
code: `
$send[200;other;<!DOCTYPE html>
<html>
<div>
  <img src="https://cdn.discordapp.com/attachments/661258334816567315/1170523264762794084/image.png?ex=655959bd&is=6546e4bd&hm=04cc5a063e3b663d586a049d33708ce7d2b0ec3981d978d85768b02a17dc80d6&">
  <h1>$getQuery[name] vs Skynet</h1>
  </div>
<style ref="./assets/style/style.css"></style>
    <body>
  
    <div>
<p>      $replaceText[$replaceText[$replaceText[$readFile[./assets/botmatch/$getQuery[name]_vs_Skynet_$getQuery[number].txt];Skynet:;<p><span style="color:blue@semi">Skynet:</span><br>];$getQuery[name]:;</p><br><p><span style="color:red@semi">$getQuery[name]:<br></span>];€;</p><br>]
      </div>
    </body>
    
  
</html>]
`
}