
const express = require("express");
const app = express();
const cors = require("cors")
const port = process.env.PORT || 4000;
const path = require("path");
const fs = require('fs');
const filePath = 'db.json'
//26d115005139d34ff93a36737305f6a0c867a74d5a4c4b4fcf8a867d789c7c306afa5a394104e90f9570276cd20e05da
const axios = require('axios');
const key = process.env.KEY || '26d115005139d34ff93a36737305f6a0c867a74d5a4c4b4fcf8a867d789c7c306afa5a394104e90f9570276cd20e05da'







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
        let id = jsonData.users.length + 1;
        body.id = id;
        jsonData.users.push(body)

        fs.writeFileSync(filePath, JSON.stringify(jsonData), 'utf8')
        return res.status(200).json(body)
    } catch (err) {
        return res.status(500).json({ message: "sever error", status: 500 })
    }
})
//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


app.post("/auth/login", (req, res) => {
    let data = fs.readFileSync(filePath, 'utf8');
    let jsonData = JSON.parse(data);
    let filtered = jsonData.users.find(item => item.email == req.body.email);
    console.log(filtered)
    if (filtered) {
        if (filtered.password == req.body.password)
            return res.status(200).json({ message: "success", data: filtered });
    }
    return res.status(404).json({ message: "Not found", statusCode: 404 })
})


app.post("/generate-images", generateImage);


async function generateImage(req,res) {
    try {
        const response = await axios.post('https://api.limewire.com/api/image/generation',
            {
                prompt: `${req.body.prompt}`,
                aspect_ratio: '1:1'
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Version': 'v1',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer lmwr_sk_XL0MjRmbBR_PKSAXoauq5V5E210jX3jwn2OUbDacVKxmkXSf'
                }
            }
        );

        // console.log(response.data)

        return res.status(200).json({image:response.data.data[0].asset_url})
    } catch (error) {
        console.log(error)
        // if(error.)
        return res.status(500).json({ message: "Internal server error", code: 500 ,error})
    }
}


//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
app.listen(port, () => {
    console.log(`magic happens on ${port}`)

})