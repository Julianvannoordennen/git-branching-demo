var express = require('express');
var app = express();
 
app.get('/',(req, res) => {
  res.send('Ewa');
});
 

app.get('/api/banaan',(req, res) => {
  res.status(200).json({
    'banaan': 'cool'
  });
});

app.listen(3000);