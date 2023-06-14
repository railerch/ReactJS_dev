import React, { useState } from "react";


// En React los datos de los elementos de un formulario se controlan mediante los estados
function FrmComp(props) {
    const [name, setName] = useState("");
    const [cedula, setCedula] = useState("");
    const [comentarios, setComentarios] = useState("");
    const [genero, setGenero] = useState("");

    const prevDef = (evt) => {
        evt.preventDefault();
        alert(`Nombre: ${name}\nCedula: ${cedula} \nGenero: ${genero} \nComentarios: ${comentarios}`);
    }

    return (
        <div className="col-6 mx-auto">
            <form id="frm" className="form-group" onSubmit={prevDef}>
                <input className="form-control mt-2" type="number" name="cedula" placeholder="Cedula" value={cedula} onChange={(evt) => setCedula(evt.target.value)} />

                <input className="form-control mt-2" type="text" name="nombre" placeholder="Nombre completo" value={name} onChange={(evt) => setName(evt.target.value)} />

                <select className="form-control mt-2" name="genero" value={genero} onChange={(evt) => setGenero(evt.target.value)}>
                    <option value="">Genero</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>

                <textarea className="form-control mt-2" type="text" name="comentarios" value={comentarios} placeholder={props.placeholder} onChange={(evt) => setComentarios(evt.target.value)} />

                <div className="btn-group">
                    <input className="btn btn-primary mt-2" type="submit" value="ENVIAR" />
                    <input className="btn btn-secondary mt-2" type="button" value="RESET" />
                </div>

            </form>
        </div>
    );
}

export default FrmComp;