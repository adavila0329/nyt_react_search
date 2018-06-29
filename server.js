const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

const Article = require("./models/articles");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nyt-articles");

// This allows us to serve files out of the client/build folder
app.use(express.static("client/build"));

app.get("/", (req, res) => {
    res.send("hi");
});

app.get("/api/article", (req, res) => {
    console.log("this should be hit")
    res.json(
        [
            {
                id:1,
                title: "Article1",
                body: "this is my Article now"
            }, {
                id:2,
                title: "Article2",
                body: "this is also my Article"
            }
        ]
    );
})

app.post("/api/article", (req, res) => {
    console.log(req.body);
    Article.create(req.body).then(dbArticle => {
        res.json(dbArticle); 
    })
})

// This is a catch all if no other routes are matched
app.use(function(req, res) {
    res.sendFile(path.join(_dirname, "client/build/index.html"));
});

app.listen(PORT, function(){
    console.log("API Server now listening on port ${PORT}");
})