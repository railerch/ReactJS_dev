const Formulario = (props) => {
    let camposArr = [];
    let frmId;

    for (let i in props) {
        if (props[i].type !== "button") {
            camposArr.push(
                <div key={i} className="input-group mb-3">
                    <label className="input-group-text">{props[i].label}</label>
                    <input id={props[i].label} type={props[i].type} className="form-control" onChange={props[i].method} value={props[i].value} />
                </div>
            )
        } else {
            frmId = props[i].label;
            camposArr.push(
                <div key={i} className="btn-group mb-3">
                    <input id={props[i].label} type={props[i].type} className="btn btn-outline-primary" onClick={props[i].method} value={props[i].value} />
                </div>
            )
        }
    }

    return (
        <div className="container">
            <form id={frmId} className="mt-3">
                {camposArr}
            </form>
        </div>
    )
}

export default Formulario;