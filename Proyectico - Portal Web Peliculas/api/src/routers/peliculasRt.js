const express = require("express");
const Router = express.Router();
const peliculasCtrl = require("../controllers/peliculasCtrl");

Router.get("/", peliculasCtrl.disponibles)
Router.get("/:id", peliculasCtrl.seleccionada)

module.exports = Router;