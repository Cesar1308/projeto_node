const express =  require("express");

const app = express();

app.get("/", function(req, res){
  res.send("Hello World")
});

app.get("/user", function(req, res){
  res.send({
    nome: "César"
  })
});

app.delete("/user", function(req, res){
  res.send({
    nome: "César Deletado"
  })
});



app.listen(8080, function(){
  console.log("Servidor rodando");
});