import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioSesion from "./InicioSesion";
import Registro from "./Registro";
import Servicios from "./Servicios";
import Clientes from "./Clientes";
import Menu from "../components/Menu";

const RouterMenu = () => {
    const [menu, setMenu] = useState(false);
    const [sesionFrm, setSesionFrm] = useState(true);

    // ACTIVAR/DESACTIVAR MENU
    const iniciarSesion = (res) => {
        if (res.st) {
            setMenu(true);
            setSesionFrm(false);
            sessionStorage.setItem("sesion", true);
        }
    }

    const cerrarSesion = () => {
        setMenu(false);
        setSesionFrm(true);
        sessionStorage.removeItem("sesion");
    }

    // MENU URL
    let config = [
        { url: "/registro", titulo: "Registro", method: "" },
        { url: "/servicios", titulo: "Servicios", method: "" },
        { url: "/clientes", titulo: "Clientes", method: "" },
        { url: "/", titulo: "Salir", method: cerrarSesion }
    ]

    return (
        <BrowserRouter>
            {menu ? <Menu key="1" config={config} logout={cerrarSesion} /> : null}
            <Routes >
                <Route path="/" element={sesionFrm ? <InicioSesion login={iniciarSesion} /> : <h3 className="mt-3">Bienvenido!</h3>} />
                <Route path="/registro" element={<Registro menu={menu} />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/clientes" element={<Clientes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterMenu;