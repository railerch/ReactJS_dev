import React from "react";
import Titulo from "./Titulo";

const Faq = (props) => {
    const content = props.faqs.map((f, i) => {
        return (<div key={i} className="accordion-item" style={{ backgroundColor: "#111111", color: "#fff" }}>
            <h2 className="accordion-header" id={`heading${i}`}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`} style={{ backgroundColor: "#222222", color: "#fff" }}>
                    ${f.title}
                </button>
            </h2>
            <div id={`collapse${i}`} className="accordion-collapse collapse" aria-labelledby={`heading${i}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    ${f.content}
                </div>
            </div>
        </div>)
    })


    return (
        <div className="container">
            <div className="col-10 mx-auto">
                <Titulo texto="Preguntas frecuentes" />
                <div className="accordion mx-auto my-3" id="accordionExample">
                    {content ? content : "No content"}
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec tempus quam, non congue tellus.</p>
                <div className="form-group d-flex d-grid gap-2 col-5">
                    <input type="text" className="form-control" placeholder="Email" />
                    <input type="button" className="btn btn-outline-warning" value="SEND >" />
                </div>
            </div>
        </div>
    );


}

export default Faq;