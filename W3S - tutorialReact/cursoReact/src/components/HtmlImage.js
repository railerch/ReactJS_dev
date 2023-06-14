import React from "react";
import img from "../img/html.png";

function HtmlImage() {
    return (
        <div className="container d-flex shadow rounded border my-3 p-3">
            <div className="col-2">
                <img className="img-fluid" src={img} alt="HTML img" />
            </div>
            <div>
                <h1>Componente React 02</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <hr />
                <button className="btn btn-primary">TEST</button>
            </div>
        </div>
    );
}

export default HtmlImage;