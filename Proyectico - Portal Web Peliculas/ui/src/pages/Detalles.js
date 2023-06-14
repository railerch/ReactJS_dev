import React, { useState, useEffect } from "react";
import Config from "../config.json";

const Detalles = () => {
    const [pelicula, setPelicula] = useState({});
    const serverAPI = Config[0].serverAPI;

    useEffect(() => {
        let pid = sessionStorage.getItem("pid");
        fetch(`${serverAPI}/peliculas/${pid}`)
            .then(res => res.json())
            .then(res => {
                setPelicula({ ...res[0] });
            })
    }, [serverAPI])

    const Trailer = (props) => {
        return (
            <video width="400" height="240" controls muted>
                <source src={`${props.server}${props.video}`} type="video/mp4" />
            </video>
        );
    }

    return (
        <>
            <div className="fullHeiight d-flex d-grid gap-3">
                <div>
                    <img src={`${serverAPI}/${pelicula.poster}`} alt="Poster pelicula" style={{ width: "200px" }} />
                </div>
                <div>
                    <h1>{pelicula.nombre}</h1>
                    <h3>Año {pelicula.fecha}</h3>
                    <p>{pelicula.sinopsis}</p>

                </div>
                <div>
                    <h3>Trailer</h3>
                    <hr />
                    <Trailer server={serverAPI} video={pelicula.trailer} />
                </div>
            </div >
            <hr />
        </>

    )
}

export default Detalles;