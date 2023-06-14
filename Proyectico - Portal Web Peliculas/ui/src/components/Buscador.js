import React from "react";
import { Search } from 'react-bootstrap-icons'; // Importar iconos de forma individual
// import * as Icon from 'react-bootstrap-icons'; // Importar todos los iconos, para usarlos => Ejm: Icon.search, Icon.searchHeart

const Buscador = (props) => {
    return (
        <form id="buscador">
            <div className="input-group">
                <label className="input-group-text"><Search /></label>
                <input className="form-control" type="text" placeholder="Que buscas?" />
            </div>
        </form>
    );
}

export default Buscador;