import { React, useState } from "react";
import Formulario from "../components/Formulario";
import Alerta from "../components/Alerta";

const Registro = () => {
    // Variable para aviso de usuario
    const [aviso, setAviso] = useState("");

    // Servicios
    const [servicio, setServicio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");

    // Clientes
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [cedula, setCedula] = useState("");
    const [edad, setEdad] = useState("");

    // Event Handlers
    const handlerChange = (evt) => {
        let id = evt.target.getAttribute("id");

        switch (id) {
            case "Servicio":
                setServicio(evt.target.value);
                break;
            case "Descripcion":
                setDescripcion(evt.target.value);
                break;
            case "Precio":
                setPrecio(evt.target.value);
                break;
            case "Nombre":
                setNombre(evt.target.value);
                break;
            case "Apellido":
                setApellido(evt.target.value);
                break;
            case "Cedula":
                setCedula(evt.target.value);
                break;
            case "Edad":
                setEdad(evt.target.value);
                break;
            default:
                break;
        }

    }

    const handlerClick = (evt) => {
        let btnId = evt.target.getAttribute("id");
        let url = null;
        let datos = new FormData(document.getElementById(btnId));


        switch (btnId) {
            case "reg-srv":
                url = "http://localhost:8000/api/reg-servicio";
                datos.append("servicio", servicio);
                datos.append("descripcion", descripcion);
                datos.append("precio", precio);
                break;
            case "reg-cli":
                url = "http://localhost:8000/api/reg-cliente";
                datos.append("nombre", nombre);
                datos.append("apellido", apellido);
                datos.append("cedula", cedula);
                datos.append("edad", edad);
                break;
            default:
                break;
        }

        fetch(url, { method: "post", body: datos })
            .then(res => res.json())
            .then(res => {
                if (res.st) {
                    setAviso(<Alerta tipo="success" titulo="Exito!" mensaje="Registro realizado correctamente." />)
                    setTimeout(() => {
                        setAviso("");
                    }, 3000)
                };
            })
            .catch(err => {
                setAviso(<Alerta tipo="danger" titulo="Error!" mensaje="Error en registro, intente nuevamente" />)
                setTimeout(() => {
                    setAviso("");
                }, 3000)
                console.log("ERROR: " + err)
            });
    }

    // Config formulario servicios
    const servicios = [
        {
            type: "text",
            value: servicio,
            label: "Servicio",
            method: handlerChange
        },
        {
            type: "text",
            value: descripcion,
            label: "Descripcion",
            method: handlerChange
        },
        {
            type: "text",
            value: precio,
            label: "Precio",
            method: handlerChange
        },
        {
            type: "button",
            value: "REGISTRAR",
            label: "reg-srv",
            method: handlerClick
        }
    ]

    // Config formulario usuarios
    const clientes = [
        {
            type: "text",
            value: nombre,
            label: "Nombre",
            method: handlerChange
        },
        {
            type: "text",
            value: apellido,
            label: "Apellido",
            method: handlerChange
        },
        {
            type: "text",
            value: cedula,
            label: "Cedula",
            method: handlerChange
        },
        {
            type: "text",
            value: edad,
            label: "Edad",
            method: handlerChange
        },
        {
            type: "button",
            value: "REGISTRAR",
            label: "reg-cli",
            method: handlerClick
        }
    ]

    if (sessionStorage.getItem("sesion")) {
        return (
            <div className="container mt-3">
                <h1 className="text-muted">Seccion de registros</h1>
                <hr />
                {aviso}
                <div className="d-flex justify-content-around">
                    <div className="col-5">
                        <h3 className="text-muted">Registrar servicios</h3>
                        <Formulario key="srv-frm" {...servicios} />
                    </div>
                    <div className="col-5">
                        <h3 className="text-muted">Registrar clientes</h3>
                        <Formulario key="usr-frm" {...clientes} />
                    </div>
                </div>
            </div>
        )
    } else {
        window.location.replace("/");
    }
}

export default Registro;