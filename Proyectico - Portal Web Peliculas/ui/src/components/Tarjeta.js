import React from "react";
import { Link } from "react-router-dom";

const Tarjeta = (props) => {
    const { id, img, titulo } = props;

    return (
        <Link className="tarjeta" to={`/detalles/${id}`} style={{ textDecoration: "none" }} title={titulo} onClick={() => sessionStorage.setItem("pid", id)}>
            <div className="card" style={{ width: "200px", color: "#333", overflow: "hidden" }}>
                <img src={img} className="card-img-top" alt={titulo} />
                <div className="card-body text-center" style={{ height: "90px" }}>
                    <h5 className="card-title">{titulo}</h5>
                </div>
            </div>
        </Link >
    );
}
export default Tarjeta;