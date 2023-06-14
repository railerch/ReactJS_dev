const express = require("express");
const app = express();
const url = require("url");
const path = require("path");
const cors = require("./middlewares/cors");
const peliculasRt = require("./routers/peliculasRt");

// CONIFG
app.set("port", 8000);

// MIDDLEWARES
app.use(cors);
app.use("/peliculas", peliculasRt);
app.use(express.static(path.join(__dirname, "/public")));

// ROUTES
app.get("/", (req, res) => {
    console.log(url.parse(req.url));
    res.status(200).write("<h1>Server ok</h1>");
    res.end();
})

// SERVER
app.listen(app.get("port"), () => {
    console.log("Server at: http://localhost:" + app.get("port"));
})