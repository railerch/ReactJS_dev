import "./css/Btn.css";
import { Link } from "react-router-dom";

const Btn = (props) => {
    let imgW = {
        width: "25px",
        marginRight: "5px"
    }

    return (
        <Link to={props.url}>
            <p className="myBtn"><img src={props.img} alt={props.alt} style={imgW} /> {props.text}</p>
        </Link>
    );
}

export default Btn;