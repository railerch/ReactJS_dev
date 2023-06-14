import { useState, useEffect, createContext, useContext, useRef } from "react";

const nombreContext = createContext(); // Para pasar parametros del contexto de un componente a otro

function Hooks() {
    console.log("Render...");
    const [nombre, setNombre] = useState("");
    const [count, setCount] = useState(0);
    const i = useRef(0); // useRef: permite que un elemento cambie su valor sin que el componente renderice automaticamente
    const inputRef = useRef();
    const prevNombre = useRef("");

    // useEffect: recibe dos parametros, un callback y la dependencia (array)
    // Si hay algun cambio en la dependencia (variable/state, etc.) ejecuta el codigo que contiene
    // Ideal para funciones asincronas

    useEffect(() => {
        setCount(c => c + 1);
        prevNombre.current = nombre;
    }, [nombre]) // Para evitar que useEffect se ejecute en cada update se le pasa una dependencia vacia

    function focusEl() {
        inputRef.current.focus()
    }

    return (
        <nombreContext.Provider value={nombre}>
            <h2>Render: {count}</h2>
            <input type="text" value={nombre} onChange={(evt) => setNombre(evt.target.value)} placeholder="useState" />
            <p>Nombre actual: {nombre}</p>
            <p>Nombre previo: {prevNombre.current}</p>
            <hr />
            <h2>useRef Current: {i.current}</h2>
            <input type="text" onChange={(evt) => i.current = i.current + 1} placeholder="useRef" />
            <hr />
            <h2>useRef in DOM: {i.current}</h2>
            <input type="text" ref={inputRef} placeholder="useRef DOM" />
            <button onClick={focusEl}>Focus</button>
            <hr />
            <MyUseContext />
        </nombreContext.Provider >
    );
}

function MyUseContext() {
    const nombre = useContext(nombreContext); // Usar una variable desde el contexto de otro componente
    return (
        <h2>useContext: {nombre}</h2>
    );
}

export default Hooks;