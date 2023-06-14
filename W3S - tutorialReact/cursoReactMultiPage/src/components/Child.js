import { memo } from "react"; // Evita que el componente se re-renderice si no hay cambios en sus props

const Child = (props) => {
    console.log("Child render...");
    return (
        <>
            <h2>Child Component: {props.text}</h2>
        </>
    );
}

export default memo(Child); // Uso de memo