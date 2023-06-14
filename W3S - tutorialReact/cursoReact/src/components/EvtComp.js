// Los eventos 

function EvtComp(props) {

    const clicHandler = (evt, saludo, ...rest) => {
        alert(saludo + rest + ` (Evento: ${evt.type})`);
    }

    // Condicional validando las props
    if (props.activo) {
        return (
            <>
                <hr />
                <button onClick={(event) => clicHandler(event, "Hola como estan ", props.txt, " ... espero que bien!")}>Click Handler Event</button>
                <hr />
            </>
        );
    } else {
        // Condicional con el operador logico &&: condicion && ejecutar si es verdadera...
        return (props.mensaje && <h2>Boton inactivo!</h2>)
    }
    // Condicional con ternario pero al estar luego del IF con dos returns el codigo se vuelve inalcanzable
    // logicamente puede ser debido a que se espera la ejecucion de alguno de los retuns anteriores
    /*
    return (
        <>
            {props.ultima ? <h3>Block!</h3> : <h3>Unblock!</h3>}
        </>
    )
    */
}

export default EvtComp;