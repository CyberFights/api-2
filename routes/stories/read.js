module.exports = {
  path: '/stories/read',
  code: `
  $setVar[content;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$readFile[./assets/stories/$getQuery[title].txt];€;</p><br><p>      ];https://;<img src="https://];.png;.png">];.jpg;.jpg">];.gif;.gif">];.jpeg;.jpeg">]]
  
  $send[200;other;
<html>
  
<body>
   <div>  
<img src="https://cdn.discordapp.com/attachments/661258334816567315/1138349092049789018/IMG_2733.png">
</div>
<p class="para1">      
$getVar[content]
<link href=
"https://fonts.googleapis.com/css2?family=Cormorant+Infant&display=swap"
        rel="./assets/css/style.css">
  
    <style type="text/css">
        p.para1:first-letter {
            font-size: 100px;
            display: block;
            float: left;
            line-height: 0.5;
            margin: 15px 15px 10px 0;
        }
          
        body {
            font-size: 1rem;
            width: 40%;
            margin: auto;
            font-family: cormorant infant;
        }
        div {
        text-align: center;
        }
    </style>

    </body>
    
  </html>
  ]
  `
}