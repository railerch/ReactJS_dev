import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Trailers from "./Trailers";
import Detalles from "./Detalles";
import Home from "./Home";
import Buscador from "../components/Buscador";
import Logo from "../img/logo.png";

const Inicio = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <div className="d-flex flex-wrap justify-content-between mb-3">
                    <div className="col-3 ps-3">
                        <img src={Logo} alt="Logo" style={{ width: "200px" }} />
                    </div>
                    <div className="col-6 d-flex flex-wrap justify-content-end d-grid gap-2 mb-3">
                        <Buscador />
                        <div className="d-flex flex-wrap d-grid gap-2 mb-3">
                            <Link to="/" className="btn btn-outline-secondary">Inicio</Link>
                            <Link to="/trailers" className="btn btn-outline-secondary">Trailers</Link>
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trailers" element={<Trailers />} />
                    <Route path="/detalles/:id" element={<Detalles />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Inicio;