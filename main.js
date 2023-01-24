var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);

    fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description)){
      var templete = `
      <!DOCTYPE html>
  <html lang = "ko">
      <head>
          <meta charset="UTF-8">
          <title>${queryData.id}</title>
          <link rel="stylesheet" href="./main.css">
          <!-- JSdelivr -->
          <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
          <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XWK8XHMPE8"></script>
          <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-XWK8XHMPE8');
          </script>
      </head>
  
      <body>
          <nav id="header">
            <h1><a class="menulink" href="./?id=index.html">ACU</a></h1>
            <div class="void"></div>
            <ul>
              <li><a class="menulink" href="./another page/?id=about.html">About</a></li>
              <li><a class="menulink"  href="./another page/?id=skills.html">Skills</a></li>
              <li><a class="menulink" href="./another page/?id=career.html">Career</a></li>
              <li><a class="menulink" href="./another page/?id=etc.html">etc</a></li>
            </ul>
          </nav>
          <div></div>
          파일 => 문단
          </div>
      </body>
  </html>      
    }
    `;
    response.end(template);
});
app.listen(3000);
 