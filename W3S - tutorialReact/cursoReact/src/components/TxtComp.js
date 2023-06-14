import React from "react";

function TxtComp(props) {
    return (
        <>
            <p>Referencia a un componente dentro de otro...</p>
            <p>Props: {props.refNum}</p>
        </>
    );
}

export default TxtComp;