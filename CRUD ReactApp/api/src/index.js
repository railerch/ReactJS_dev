const express = require("express");
const app = express();
const router = require("./router/router.js");
const customCors = require("./middlewares/midd-cors");
const formidable = require("express-formidable"); // Para arsear los datos desde post

// CONFIG
app.set("port", 8000);

// MIDDLEWARES
// app.use(express.urlencoded({ extended: true }));
app.use(formidable());
app.use(customCors);

// ROUTES
app.get("/", (req, res) => {
    res.setHeader("content-type", "text/html");
    res.status(200).send("<h1>Server Node.JS OK</h1>");
    res.end();
})

app.use("/api", router)

// SERVER
app.listen(app.get("port"), () => {
    console.log("Server at: http://localhost:8000");
})