
const express=require("express");
const app=express();
const cors = require("cors")
const port=4000;
const path = require("path");




// app.use(express.static("client/public"));
app.use(express.static("client/build"));

// app.get("/",(req,res)=>{
//     app.use(express.static("client/build"));
//      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));

//     // return res.send("cccccccccc")
// })
app.listen(port,()=>{
    console.log(`magic happens on ${port}`)

})