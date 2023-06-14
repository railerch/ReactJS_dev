import React from "react";
import ReactDOM from "react-dom/client";
import JsImage from "./components/JsImage";
import HtmlImage from "./components/HtmlImage";
import Tabla from "./components/Tabla";
import EvtComp from "./components/EvtComp";
import FrmComp from "./components/FrmComp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([
  <JsImage dataNum="500" key="1" />,
  <HtmlImage dataNum="600" key="2" />,
  <Tabla key="3" width="80%" margin="0 auto" porc="60" />,
  <EvtComp key="4" txt="Railer, Carmen, Julio?" activo={false} mensaje={true} ultima={true} />,
  <FrmComp key="5" placeholder="Indicar comentarios..." />
]);