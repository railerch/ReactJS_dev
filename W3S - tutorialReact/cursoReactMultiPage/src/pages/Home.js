import { useState } from "react"; // React HOOK
import Child from "../components/Child";
import "../css/style.css";

function Home() {
    // Pruebas de actualizacion con 'memo', para evitar que un componente hijo se actualice si no se actualizan sus props
    const [txt1, setTxt1] = useState(0);
    const [txt2, setTxt2] = useState("Lorem ipsum dolor sit amet.."); // porps del componente 'Child'

    const chg1 = () => { setTxt1(() => prompt("Up:\n")) };
    const chg2 = () => { setTxt2(() => prompt("Nuevo texto:\n")) };

    // Pruebas de estilos con CSS
    // Se usa camelCase para las propiedades con mas de una palabra separada con guion y se escriben en formato Obj
    const btnStyle = {
        margin: "5px",
        borderRadius: "5px",
        backgroundColor: "gray",
        color: "#fff"
    }

    return (
        <>
            <h1 style={{ color: "gray", textDecoration: "underline" }/* CSS en linea */}>Pagina de inicio: {txt1}</h1>
            <h3 className="cssExterno">CSS desde modulo externo</h3>
            <hr />
            <Child text={txt2} />
            <hr />
            <button onClick={chg2} style={btnStyle}>Actualizar Child</button>
            <button onClick={chg1}>Actualizar Parent</button>
        </>
    )
}

export default Home;