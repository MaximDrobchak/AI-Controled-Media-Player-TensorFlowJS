const express = require('express');

const app = express();

const jsonParser = express.json();

app.post('/user', jsonParser, function (request, response){
  console.log(request.body);
  if (!request.body) return response.sendStatus(400);

  response.json(request.body);
});

app.get('/saved_model_style_inception_js', function (request, response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.sendFile(__dirname + '/saved_model_style_inception_js/model.json');
});

app.get('/saved_model_style_js', function (request, response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.sendFile(__dirname + '/saved_model_style_js/model.json');
});
app.get('/saved_model_transformer_js', function (request, response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.sendFile(__dirname + '/saved_model_transformer_js/model.json');
});

app.get('/saved_model_transformer_separable_js', function (request, response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.sendFile(
    __dirname + '/saved_model_transformer_separable_js/model.json',
  );
});

/********************************* */
app.get('/group1-shard2of3', function (request, response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.sendFile(__dirname + '/saved_model_style_js/group1-shard2of3');
});

app.get('/group1-shard1of3', function (request, response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.sendFile(__dirname + '/saved_model_style_js/group1-shard1of3');
});

app.get('/group1-shard3of3', function (request, response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.sendFile(__dirname + '/saved_model_style_js/group1-shard3of3');
});

app.get('/group1-shard1of2', function (request, response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.sendFile(__dirname + '/saved_model_transformer_js/group1-shard1of2');
});

app.get('/group1-shard2of2', function (request, response){
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  response.sendFile(__dirname + '/saved_model_transformer_js/group1-shard2of2');
});

app.listen(3001);
// "localhost:3001/group1-shard1of2",
// "localhost:3001/group1-shard2of2"
// "localhost:3001/group1-shard1of1"
// "localhost:3001/group1-shard1of3",
// "localhost:3001/group1-shard2of3",
// "localhost:3001/group1-shard3of3"
// "localhost:3001/group1-shard1of9",
// "localhost:3001/group1-shard2of9",
// "localhost:3001/group1-shard3of9",
// "localhost:3001/group1-shard4of9",
// "localhost:3001/group1-shard5of9",
// "localhost:3001/group1-shard6of9",
// "localhost:3001/group1-shard7of9",
// "localhost:3001/group1-shard8of9",
// "localhost:3001/group1-shard9of9"
