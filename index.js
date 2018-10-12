var express = require('express');
var httpPort = process.env.httpPort || 8000;

var app = express();

app.use(express.static('views'))


app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

if (require.main === module) {
  app.listen(httpPort, function() {
    console.log('Server http listening on port %d', this.address().port);
  });
}
