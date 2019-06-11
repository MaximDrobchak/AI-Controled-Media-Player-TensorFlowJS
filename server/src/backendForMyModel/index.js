const express = require('express');

const app = express();

const jsonParser = express.json();

app.post('/user', jsonParser, function (request, response){
  console.log(request.body);
  if (!request.body) return response.sendStatus(400);

  response.json(request.body);
});

app.get('/', function (request, response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.sendFile(__dirname + '/my-model.json');
});
app.get('/my-model.weights.bin', function (request, response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.sendFile(__dirname + '/my-model.weights.bin');
});

app.listen(3001);
