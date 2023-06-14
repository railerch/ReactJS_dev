import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import RouterMenu from "./pages/RouterMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="container">
        <RouterMenu />
    </div>
);