import React from "react";

const Titulo = (props) => {
    const txt = props.texto;
    return (
        <h3>{txt}</h3>
    );
}

export default Titulo;