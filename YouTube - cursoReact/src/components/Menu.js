import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {

    render() {
        const { onChange, onSubmit, form } = this.props;
        return (
            <div className="container">
                <h2>Nuevo plato</h2>

                <hr />

                <form className="d-flex flex-column d-grid gap-2" onSubmit={onSubmit} >
                    <div className="input-group">
                        <span className="input-group-text">Plato</span>
                        <input
                            className="form-control"
                            type="text"
                            name="titulo"
                            onChange={onChange}
                            value={form.titulo}
                        />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text">Descripción</span>
                        <input
                            className="form-control"
                            type="text"
                            name="descripcion"
                            onChange={onChange}
                            value={form.descripcion}
                        />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text">Precio $</span>
                        <input
                            className="form-control"
                            type="number"
                            name="precio"
                            min="0"
                            step="0.01"
                            onChange={onChange}
                            value={form.precio}
                        />
                    </div>

                    <div className="d-flex d-grid gap-2">
                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Crear"
                        />
                        <Link to="/" className="btn btn-secondary"> Volver </Link>
                    </div>
                </form>
            </div >
        )
    }

}

export default Menu;