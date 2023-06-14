// Los hooks son el reemplazo de los metodos de estado y ciclo de vida de los componentes de clase en los componentes funcionales
// Solo se usan en componentes funcionales y en el primer nivel o scope dentro del componente 
// No son condicionales
import { useState } from "react"; // Para hacer seguimiento del estado de las variables o propiedades de un componente

function App(props) {
    const [cont, setCont] = useState(0);
    const [color, setColor] = useState("lightgray");
    const [itemTmp, setItem] = useState({
        item01: "100",
        item02: "200",
        item03: "300",
        itemTmp: "Lorem ipsum"
    });

    const [tmp, setTmp] = useState("");

    // CSS
    const container = {
        width: "80%",
        padding: "10px",
        margin: "0 auto"
    }

    const colorDiv = {
        width: "250px",
        height: "250px",
        margin: "10px 0",
        border: "1px solid lightgray",
        boxShadow: "0 0 5px #00000050",
        backgroundColor: color
    }

    const boton = {
        padding: "5px",
        backgroundColor: "crimson",
        color: "#fff",
        border: "0",
        borderRadius: "5px",
        cursor: "pointer"
    }

    // DATA
    const colores = ["red", "green", "cyan", "yellow", "purple", "orange"];

    const cambiar_color = () => {
        let L = colores.length;
        setColor(() => colores[cont]);
        setCont((c) => c + 1);

        if (cont === L) {
            setCont((c) => c = 0);
        }
    }

    const cambiar_item = () => {
        setItem(prevSt => { return { ...prevSt, itemTmp: tmp } })
    }

    return (
        <div style={container}>
            <h1 id="titulo">React Hook</h1>
            <hr />
            <div style={colorDiv}></div>
            <button style={boton} onClick={cambiar_color}>Cambiar Color</button>
            <hr />
            <h3>useState() Hook con destructuring:</h3>
            <input value={tmp} placeholder="Escriba el valor de 'itemTmp'" onChange={(evt) => setTmp(evt.target.value)} />
            <button onClick={cambiar_item}>OK</button>
            <ul>
                <li>item01: {itemTmp.item01}</li>
                <li>item01: {itemTmp.item02}</li>
                <li>item01: {itemTmp.item03}</li>
                <li>itemTmp: {itemTmp.itemTmp}</li>
            </ul>
        </div>
    )
}

export default App;