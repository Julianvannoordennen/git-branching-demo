var express = require('express');
var app = express();
 
app.get('/',(req, res) => {
  res.send('Hello kids');
});
 
app.listen(3000);