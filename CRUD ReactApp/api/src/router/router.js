const express = require("express");
const eRouter = express.Router();
const ctrl = require("../controller/controller");

eRouter.get("/servicios", ctrl.servicios);
eRouter.get("/clientes", ctrl.clientes);
eRouter.post("/reg-servicio", ctrl.regServicio);
eRouter.get("/del-servicio/:id", ctrl.delServicio);
eRouter.post("/reg-cliente", ctrl.regCliente);
eRouter.get("/del-cliente/:id", ctrl.delCliente);
eRouter.get("/iniciar-sesion/:usr/:pss", ctrl.iniciarSesion);

module.exports = eRouter;