const express = require("express");
const nodemon =require("nodemon");
const axios = require("axios");

const path = require("path");
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "public")));

app.get("/search", async (req, res) => {
    try {
        const { query } = req.query;
        const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
            params: {
                q: query,
                format: "json"
            }
        });
        return res.json(response.data);
        // console.log( res.json(response.data));
    } catch (error) {
        res.status(500).json({ error: "Lỗi tìm kiếm" });
    }
});

// app.get("/",(req,res)=> {
//      res.send('<a href="https://expressjs.com/"> Google </a>    hello nhes      <a href="https://developers.google.com/maps/documentation/embed/get-api-key"> youtube </a>');   
// })
app.listen(port, ()=>{
    console.log(`success access http://localhost:${port}`);
})



