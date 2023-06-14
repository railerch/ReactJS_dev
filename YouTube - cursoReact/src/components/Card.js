import React from "react";
import "./css/Card.css";

// Botones
import LikeBtn from "./Btn";
import imgBtn from "./img/like.png";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btn: <LikeBtn img={imgBtn} text="Like us!" alt="Like" />
        }
    }

    /*
    componentDidMount() {
        setTimeout(() => {
            this.setState({ text: "Componente montado..." })
        }, 3000)
    }

    shouldComponentUpdate() {
        
    }
    
    componentDidUpdate() {
        setTimeout(() => {
        }, 5000)
    }

    componentWillUnmount() {
    this.setState({ text: "Componente actualizado...", btn: <LikeBtn img={imgBtn} text="Like us!" alt="Like" /> });
        this.setState({ text: "Se desmontara el componente..." });
    }
    */

    render() {

        const css = {
            textShadow: "1px 1px 3px #000"
        }

        return (
            <div className="card-container shadow" style={{ backgroundImage: this.props.bground }}>
                <figure className="card-img">
                    <img src={this.props.imagen} alt="Imagen" />
                </figure>
                <div className="card-text ms-3">
                    <h1 style={css} >{this.props.titulo}</h1>
                    <p style={{ color: "lightgray" }}>{this.props.descripcion}</p>
                    <p style={{ color: "lightgray" }}>{this.props.precio ? `$${this.props.precio}` : null}</p>
                    <hr />
                    {this.state.btn}
                </div>
            </div>
        );
    }
}

export default Card;