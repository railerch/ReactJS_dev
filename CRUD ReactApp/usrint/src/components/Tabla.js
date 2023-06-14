const Tabla = (props) => {
    const datos = props.datos;

    if (datos.length > 0) {
        let cols;

        if (datos) {
            cols = Object.keys(datos[0]);
            cols.push("");
        }

        const css = {
            maxHeight: "350px",
            overflowY: "auto",
            margin: "0 auto"
        }

        return (
            <div className="container" style={css}>
                <table key="table-0" className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            {
                                cols.map((col, i) => <th key={`th-${i}`}>{col.toUpperCase()}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datos.map((row, i) => {
                                let cols = [];
                                let c = 0;

                                // Datos de celda
                                for (let col in row) {
                                    cols.push(<td key={`${i}-${c}`}>{row[col]}</td>);
                                    c++;
                                }

                                // Botones de renglon
                                cols.push(
                                    <td key={`${i}-${c + 1}`} className="text-center">
                                        <span id={row.id} className="btn btn-sm btn-outline-danger" onClick={props.btnAccion} >DEL</span>
                                    </td>
                                );

                                // Renderizado de renglones
                                return (
                                    <tr key={`tr-${i}`}>
                                        {cols}
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    } else {
        return <h5 style={{ color: "orange" }}>Sin datos para mostrar</h5>
    }

}

export default Tabla;