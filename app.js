const express = require("express");
const app = express();
 const cors=require("cors"); 
const axios =require("axios");
 app.use(cors());
 



app.use(express.json());

app.get("/message", (req, res) => {
  console.log("Connected to React");
 
  res.json({message:"Server Connected"});
});
  
app.post('/openurl',function(req,res,next){
    let url=req.body;
    axios.get(url)
    .then(function(response){
        console.log(response);
        res.json({content:response});
        res.send(response)
    })
    .catch(function(error){
        console.log(error);
    })
})
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));