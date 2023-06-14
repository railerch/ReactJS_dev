const Alerta = (props) => {
    return (
        <div id="aviso-usuario" className={`alert alert-${props.tipo}`} role="alert">
            {props.titulo}: {props.mensaje}
        </div>
    );
}

export default Alerta;