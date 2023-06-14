import Formulario from "../components/Formulario";
import { useState } from "react";
import useColor from "../custom-hooks/useColor";
import Alerta from "../components/Alerta";

const InicioSesion = (props) => {
    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");
    const color = useColor("purple");
    const [Aviso, setAviso] = useState("");

    // Event Handlers
    const handlerChange = (evt) => {
        let id = evt.target.getAttribute("id");

        switch (id) {
            case "Nombre":
                setNombre(evt.target.value);
                break;
            case "Clave":
                setClave(evt.target.value);
                break;
            default:
                break;
        }

    }

    const handlerClick = (evt) => {
        fetch(`http://localhost:8000/api/iniciar-sesion/${nombre}/${clave}`)
            .then(res => res.json())
            .then(res => {
                if (res.st) {
                    setAviso(<Alerta tipo="success" titulo="Exito!" mensaje="Iniciando sesión..." />)
                    setTimeout(() => {
                        setAviso("");
                        props.login(res);
                    }, 3000)
                } else {
                    setAviso(<Alerta tipo="danger" titulo="Error!" mensaje="Datos incorrectos." />)
                    setTimeout(() => {
                        setAviso("");
                    }, 3000)
                }
            })
            .catch(err => console.log("ERROR: " + err));
    }

    // Campos para el formnulario
    let config = [
        {
            type: "text",
            value: nombre,
            label: "Nombre",
            method: handlerChange
        },
        {
            type: "password",
            value: clave,
            label: "Clave",
            method: handlerChange
        },
        {
            type: "button",
            value: "INICIAR SESION",
            method: handlerClick
        }
    ]

    // Eliminar la variable de sesion del storage
    sessionStorage.removeItem("sesion");

    return (
        <div className="mt-3">
            <h3 style={{ color: color, textShadow: `0px 0px 5px ${color}` }}>INICIO DE SESION</h3>
            <hr />
            {Aviso}
            <Formulario key="login-frm" {...config} />
        </div>
    );
}

export default InicioSesion;