var express = require('express');
var app = express();
 
app.get('/',(req, res) => {
  res.send('Ewa');
});

app.get('/helloworld', (req, res) => {
  res.send('New hello world!!!');
});
 
app.listen(3000);