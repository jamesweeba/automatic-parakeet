
const express = require("express");
const app = express();
const cors = require("cors")
const port = 4000;
const path = require("path");
const fs = require('fs');
const filePath = 'db.json'




// app.use(express.static("client/public"));
app.use(express.static("client/build"));
app.use(express.json());
app.use(cors())

app.use(express.urlencoded({ extended: true }));


app.post("/auth/signup", (req, res) => {
    let body = req.body;
    try {
        let data = fs.readFileSync(filePath, 'utf8');
        let jsonData = JSON.parse(data);
        let id=jsonData.users.length+1;
        body.id=id;
        jsonData.users.push(body)
      
        fs.writeFileSync(filePath, JSON.stringify(jsonData), 'utf8')
        return res.status(200).json(body)
    } catch (err) {
        return res.status(500).json({message:"sever error",status:500})}
})


app.post("/auth/login",(req,res)=>{
    let data = fs.readFileSync(filePath, 'utf8');
    let jsonData = JSON.parse(data);
    let filtered=jsonData.users.find(item=>item.email==req.body.email);
    console.log(filtered)
    if(filtered){
        if(filtered.password==req.body.password)
          return res.status(200).json({message:"success",data:filtered});

         

    }
    // if(filtered.password==req.body.password){
    //     return res.status(200).json({message:"success",data:filtered})

    // }

    return   res.status(404).json({message:"Not found",statusCode:404})



})


app.listen(port, () => {
    console.log(`magic happens on ${port}`)

})