import React from "react";
import { useState, useEffect } from "react";
import Titulo from "../components/Titulo";
import Tarjeta from "../components/Tarjeta";
import Config from "../config.json";

const Videos = () => {
    const [peliculas, setPeliculas] = useState([]);

    let serverAPI = Config[0].serverAPI;

    // Peliculas
    useEffect(() => {
        fetch(`${serverAPI}/peliculas`)
            .then(res => res.json())
            .then(res => {
                if (res.length > 0) {
                    let pelis = res.map((peli, i) => <Tarjeta key={i} id={peli.id} titulo={peli.nombre} img={`${serverAPI}/${peli.poster}`} />);
                    setPeliculas(pelis);
                } else {
                    setPeliculas(<h2 className="text-muted">Sin resultados...</h2>)
                }
            })
    }, [serverAPI])

    return (
        <>
            <div className="fullHeiight">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet iaculis ante,
                    eu blandit odio blandit id. Proin et laoreet odio. Maecenas non ultricies nulla.
                    Praesent ante urna, gravida congue neque at, finibus molestie ipsum. Pellentesque
                    vitae condimentum felis. In molestie sed ligula id efficitur.
                </p>
                <br />
                <Titulo texto="Cartelera" />
                <hr />
                <div id="cartelera" className="d-flex flex-wrap d-grid gap-2">
                    {peliculas}
                </div>
            </div>
            <hr />
        </>

    );
}

export default Videos;