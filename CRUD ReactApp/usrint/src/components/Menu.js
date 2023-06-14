import { Link } from "react-router-dom";

const Menu = (props) => {
    const config = props.config;
    return (
        <div className="container mt-3">
            <h3>REACT APP</h3>
            <hr />
            <nav className="d-flex d-grid gap-2 mt-3">
                {
                    config.map((btn, i) => <Link key={i} className="btn btn-primary" to={btn.url} onClick={btn.method}>{btn.titulo}</Link>)
                }
            </nav>
        </div>

    );
}

export default Menu;