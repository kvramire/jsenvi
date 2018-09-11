import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */
const port = 3000;
const app = express();

app.use(compression()); //gzip compression
app.use(express.static('dist'));


app.get('/', function(req, res){
  console.log('incoming request...');
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res)=>{
  res.json([
    {"id":1, "firstName": "Bob", "LastName":"Smith", "email":"bob@gmail.com"},
    {"id":2, "firstName": "Tamy", "LastName":"Norton", "email":"tamy@gmail.com"},
    {"id":3, "firstName": "Tina", "LastName":"Lee", "email":"tina@gmail.com"}
  ]);
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
