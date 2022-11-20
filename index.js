const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4:uuid} = require("uuid");
const exp = require("constants");

const app = express();
app.use(express.json());

app.get("/outfit", (req, res) => {

    const tops = ["Black", "White", "Orange", "Navy"];
    const jeans = ["Grey", "Dark Grey", "Orange", "Navy"];
    const shoes = ["White", "Grey", "Black"];

    res.json({
        top: _.sample(tops),
        jeans: _.sample(jeans),
        shoes: _.sample(shoes)
    });

});

app.post("/comments", (req, res) => {
    const id = uuid();
    const content = req.body.content;
    
    if(!content){
 
        return res.sendStatus(400);
    }

    console.log(content);
    res.send(content);
    
});

app.listen(3000, () => console.log("API Server is running"));

