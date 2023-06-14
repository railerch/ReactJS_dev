import React from "react";

const Footer = () => {
    const list = {
        padding: "0",
        listStyle: "none"
    }

    return (
        <div className="container mt-5">
            <div className="col-10 mx-auto">
                <p>Nunc nec tempus quam, non congue tellus <a href="/#" taget="_blank">+19698589621</a> Cras aliquet pulvinar consectetur. Suspendisse rhoncus, leo id finibus tempus</p>
                <div className="d-flex justify-content-between">
                    <div>
                        <ul style={list}>
                            <li>Vestibulum ante</li>
                            <li>Donec scelerisque</li>
                            <li>Donec vel risus</li>
                            <li>Cras blandit euismod</li>
                        </ul>
                    </div>
                    <div>
                        <ul style={list}>
                            <li>Suscipit lorem </li>
                            <li>Etiam condimentum</li>
                            <li>Tristique quam</li>
                            <li>Blandit euismod</li>
                        </ul>
                    </div>
                    <div>
                        <ul style={list}>
                            <li>Vestibulum</li>
                            <li>Nec fringilla</li>
                            <li>Vulputate ante</li>
                            <li>Nam pellentesque </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={list}>
                            <li>Ante</li>
                            <li>Scelerisque</li>
                            <li>Vel risus</li>
                        </ul>
                    </div>

                </div>

                <div className="col-2 mt-4">
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-globe"></i>
                        </span>
                        <select className="form-select">
                            <option value="" >Idioma</option>
                            <option value="ES">Español</option>
                            <option value="EN">Ingles</option>
                            <option value="FR">Frances</option>
                            <option value="AL">Aleman</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;