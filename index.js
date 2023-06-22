const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const chefs = require("./data/ChefMarquee.json");
const info = require("./data/ChefInfo.json");

const cors = require('cors');
app.use(cors());

app.get("/", (req, res) => {
    res.send("Don't ask me what foodie fiesta means !!");
});

app.get("/chefs", (req, res) => {
    res.send(chefs);
});

app.get("/info", (req, res) => {
    res.send(info);
});

app.listen(port, () => {
    console.log(`Foodie API is running on port ${port}`);
})