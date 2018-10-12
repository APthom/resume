var express = require('express');
//var https = require('https');
var httpPort = process.env.httpPort || 8000;
//var httpsPort = process.env.httpsPort || 443;

var app = express();

app.use(express.static('resume'))

//app.use(express.static(path.join(__dirname, 'views')));

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'resume', 'index.html'));
});

if (require.main === module) {
  app.listen(httpPort, function() {
    console.log('Server http listening on port %d', this.address().port);
  });
}
