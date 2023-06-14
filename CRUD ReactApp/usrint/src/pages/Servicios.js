import { useState, useEffect } from "react";
import Tabla from "../components/Tabla";
import Alerta from "../components/Alerta";

const Servicios = () => {
    const [datos, setDatos] = useState(null);
    const [Aviso, setAviso] = useState("");

    // Cargar registros
    useEffect(() => {
        fetch("http://localhost:8000/api/servicios")
            .then(res => res.json())
            .then(res => {
                setDatos(res);
            })
            .catch(err => console.log("ERROR: " + err))
    }, [Aviso])

    // Eliminar registro
    const btnAccion = (evt) => {
        let regID = evt.target.getAttribute("id");

        fetch(`http://localhost:8000/api/del-servicio/${regID}`)
            .then(res => res.json())
            .then(res => {
                if (res.st) {
                    setAviso(<Alerta tipo="success" titulo="Exito!" mensaje="Registro eliminado correctamente." />)
                    setTimeout(() => {
                        setAviso("");
                    }, 3000)
                }
            })
            .catch(err => {
                setAviso(<Alerta tipo="danger" titulo="Error!" mensaje="Error al eliminar el registro, intente nuevamente" />)
                setTimeout(() => {
                    setAviso("");
                }, 3000)
                console.log("ERROR: " + err)
            });
    }

    // Renderizar datos
    if (sessionStorage.getItem("sesion")) {
        return (
            <div className="container mt-3">
                <h1 className="text-muted">Servicios disponibles</h1>
                <hr />
                {Aviso}
                <Tabla key="servicios-tbl" datos={datos ? datos : []} btnAccion={btnAccion} />
            </div>
        )
    } else {
        window.location.replace("/");
    }
}

export default Servicios;