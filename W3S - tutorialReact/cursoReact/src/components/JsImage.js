import React from "react";
import img from "../img/javascript.png";

function JsImage(props) {
    return (
        <div className="container d-flex shadow rounded border my-3 p-3">
            <div className="col-2">
                <img className="img-fluid" src={img} alt="JS img" />
            </div>
            <div>
                <h1 className="titulo">Componente React 01</h1>
                <p id="contenido" data-num={props.dataNum} >Numero de componente: {props.dataNum}</p>
                <hr />
                <button className="btn btn-primary">TEST</button>
            </div>
        </div >
    );
}

export default JsImage;