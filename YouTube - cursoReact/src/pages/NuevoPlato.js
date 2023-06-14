import React from "react";
import Menu from "../components/Menu";
import Card from "../components/Card";
import menuImg from "../components/img/menu.png";

class NuevoPlato extends React.Component {

    state = {
        form: {
            bground: "linear-gradient(45deg, orange, crimson)",
            imagen: menuImg,
            titulo: "",
            descripcion: "",
            precio: "0.00"
        }
    }

    handleChange = evt => {
        this.setState({
            form: {
                ...this.state.form,
                [evt.target.name]: evt.target.value
            }
        });
    }

    handleSubmit = evt => {
        evt.preventDefault();
        console.table(this.state.form);
    }

    render() {
        return (
            <>
                <div className="d-flex mt-5">
                    <div className="col-6">
                        <Card {...this.state.form} />
                    </div>
                    <div className="col-6">
                        <Menu onChange={this.handleChange} onSubmit={this.handleSubmit} form={this.state.form} />
                    </div>
                </div>
            </>
        );
    }
}

export default NuevoPlato; 