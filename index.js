const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const chefs = require("./data/ChefMarquee.json");
const info = require("./data/ChefInfo.json");

const cors = require('cors');
app.use(cors());

app.get("/", (req, res) => {
    res.send('Dragon is running!!!');
});

app.get("/chefs", (req, res) => {
    res.send(chefs);
});

app.get("/info", (req, res) => {
    res.send(info);
});

// app.get("/news/:ID", (req, res) => {
//     const ID = req.params.ID;
//     const selectedNews = news.find(n => n._id == ID);
//     res.send(selectedNews)
// });

// app.get("/categories/:ID", (req, res) => {
//     const ID = req.params.ID;
//     if (ID === "0") {
//         res.send(news);
//     }
//     else {
//         const categoryNews = news.filter(n => n.category_id == ID);
//         res.send(categoryNews);
//     }
// });

app.listen(port, () => {
    console.log(`dragon API is running on port ${port}`);
})