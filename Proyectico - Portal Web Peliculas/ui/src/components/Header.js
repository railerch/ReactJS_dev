import React from "react";
import bgImg from "../img/header.jpg";

const Header = (props) => {
    const style = {
        display: "flex",
        alignItems: "center",
        height: "500px",
        padding: "0 50px",
        borderRadius: "25px",
        backgroundImage: `url(${bgImg}), linear-gradient(to left, white, black), linear-gradient(to right, red, transparent)`,
        backgroundBlendMode: "overlay"
    }

    return (
        <div className="container" style={style}>
            <div>
                <h1 style={{ fontSize: "4.5em", fontFamily: "Arial black" }}>Lorem ipsum dolor sit amet</h1>
                <h3>Maecenas nulla  USD{props.precio ? props.precio : "0,00"} pulvinar.</h3>
                <p>Quisque rutrum massa nibh, in molestie magna aliquet vitae. Sed in tempus metus?</p>
                <div className="form-group d-flex d-grid gap-2 col-5">
                    <input type="text" className="form-control" placeholder="Email" />
                    <input type="button" className="btn btn-outline-warning btn-lg" value="SEND >" />
                </div>
            </div>
        </div>
    );
}

export default Header;