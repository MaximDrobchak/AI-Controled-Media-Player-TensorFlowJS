const express = require("express");

const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();

app.post("/user", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);

    response.json(request.body); // отправляем пришедший ответ обратно
});

app.get("/", function(request, response){
    response.setHeader("Access-Control-Allow-Origin", 'http://localhost:3000')
    response.sendFile(__dirname + "/my-model.json");
    // response.sendFile(__dirname + "/my-model.weights.bin");
});
app.get("/my-model.weights.bin", function(request, response){
  response.setHeader("Access-Control-Allow-Origin", 'http://localhost:3000')
  response.sendFile(__dirname + "/my-model.weights.bin");
  // response.sendFile(__dirname + "/my-model.weights.bin");
});
app.listen(3001)