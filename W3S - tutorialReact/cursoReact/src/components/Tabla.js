import React from "react";
import TxtComp from "./TxtComp";

class Tabla extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: "red", porcentaje: "0.0%", reng: true }
    }

    /**
     * Ciclos de vida de un componente:
     * Mount: cuando se inserte en el DOM, metodos => constructor(), getDerivedStateFromProps(), render(), componentDidMount()
     * Updated: cuando se actualiza, metodos => getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate()
     * Unmount: cuando se elimina del dom, metodos => componentWillUnmount()
     * */

    // METODOS LIFECYCLE DE REACT

    // ANTES DEL RENDER
    // ================

    // Actualiza el State de una propiedad con el valor recibido desde las props, se ejecuta antes del render
    static getDerivedStateFromProps(props, state) {
        return { porcentaje: props.porc };
    }

    // Indica si el componente puede ser actualizado despues de ser renderizado
    shouldComponentUpdate() {
        return true;
    }

    // Guarda el estado previo del State del componente antes de actualizarlo
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("State previo: " + prevState.color);
    }

    // DESPUES DEL RENDER
    //===================

    // Comprueba si el componente ya se ha insertado en el DOM para ejecutar el codigo del bloque
    componentDidMount() {
        setTimeout(function () {
            console.log("Componente 'ClsComp' cargado...");
        }, 0)
    }

    // Comprueba si el componente se actualizo y ejecuta el codigo del bloque
    componentDidUpdate() {
        alert("Componente padre actualizado");
        console.log("State actual: " + this.state.color);
    }

    // METODOS DEL COMPONENTE
    //======================

    // SetState() para cambiar el estado de la propiedad de un componente
    cambiar_color = () => this.state.color === "red" ? this.setState({ color: "green" }) : this.setState({ color: "red" });

    eliminar_renglones = () => {
        this.setState({ reng: false });
    }

    // RENDER
    //=======

    render() {
        let renglones = [["01", "Railer", "Chalbaud"], ["02", "Carmen", "Gonzalez"],
        ["03", "Jose", "Azocar"]];
        let i = 0;

        return (
            <div style={{ width: this.props.width, margin: this.props.margin, display: this.state.display }}>
                <h1 style={{ color: this.state.color }}>Tabla de datos</h1>
                <button onClick={this.cambiar_color}>
                    Color
                </button>
                <button onClick={this.eliminar_renglones}>
                    DEL
                </button>

                <hr />

                <table className="table">
                    <thead className="table-dark text-center">
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>APELLIDO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.reng && renglones.map(reng => <Reng key={i++} id={reng[0]} nombre={reng[1]} apellido={reng[2]} />)}
                    </tbody>
                </table>

                <hr />
                
                <TxtComp refNum="1500" />
                <p>Carga: {this.state.porcentaje}</p>
            </div >
        )
    }
}

class Reng extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: props.id, nombre: props.nombre, apellido: props.apellido, display: "table-row" };
    }

    componentWillUnmount() {
        // Se ejecuta justo antes de eliminar un componente.
        // Para que se active esta funcion el componente debe dejar de utilizarse, no es ocultarlo con CSS 
        // ni removerlo del dom con remove(), es que al actualizar el componente padre este se omita del renderizado
        // estariamos hablando de desmontar el componente como tal.
        alert("Se eliminara el componente hijo...");
    }

    render() {
        return (
            <tr style={{ display: this.state.display }}>
                <td>{this.state.id}</td>
                <td>{this.state.nombre}</td>
                <td>{this.state.apellido}</td>
            </tr>
        );
    }
}

export default Tabla;