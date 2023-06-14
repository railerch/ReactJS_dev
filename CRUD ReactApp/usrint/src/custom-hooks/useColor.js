import { useState } from "react";

const useColor = iniSt => {
    const [color, setColor] = useState(iniSt);

    setTimeout(() => {
        setColor(color === iniSt ? "gray" : iniSt);
    }, 1000)

    return color;
}

export default useColor;