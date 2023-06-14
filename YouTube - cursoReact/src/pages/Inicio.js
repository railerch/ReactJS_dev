import React from "react";
import Card from "../components/Card";
import personal from "../components/img/personal.png";
import hamburguesa from "../components/img/hamburguesa.png";
import menu from "../components/img/menu.png";
import Btn from "../components/Btn";

const data = [
    {
        titulo: "Personal especializado",
        descripcion: "Las mejor calidad de servicio",
        imagen: personal,
        bground: "linear-gradient(45deg, cyan, purple)"
    },
    {
        titulo: "La mejores hamburguesas",
        descripcion: "Con ingredientes frescos",
        imagen: hamburguesa,
        bground: "linear-gradient(45deg, lightgreen, magenta)"
    }
]

let cont = 0;

class Inicio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                {data.map(dat => <Card key={cont++} titulo={dat.titulo} descripcion={dat.descripcion} imagen={dat.imagen} bground={dat.bground} />)};
                <div style={{ width: "50%", margin: "0 auto", display: "flex", justifyContent: "center" }}>
                    <Btn url="/nuevo-plato" text="Crear menu" img={menu} alt="Menu Btn" />
                </div>
            </>
        );
    }

}

export default Inicio;