import React from "react";

const Banner = (props) => {
    let flip = props.flex ? "flex-row-reverse" : "";
    return (
        <div className="container my-4">
            <div className={`d-flex ${flip} flex-wrap align-items-center justify-content-center d-grid gap-3`}>
                <div className="col-5">
                    <img src={props.img} alt="Imagen" style={{ maxWidth: "500px", maxHeight: "500px" }} />
                </div>

                <div className="col-5">
                    <h1>{props.title}</h1>
                    <p>{props.txt}</p>
                </div>
            </div>

        </div>
    );
}

export default Banner;