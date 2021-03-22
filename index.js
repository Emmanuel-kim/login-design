const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});


app.use(express.static('public'));

app.post("/", function() {
  
})



app.listen(3000, function(){
  console.log("app started running on port 3000");
})




  
