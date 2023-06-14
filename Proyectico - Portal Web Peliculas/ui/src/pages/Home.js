import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import smarttvImg from "../img/smartTV.png";
import devicesImg from "../img/devices.png";
import kidsImg from "../img/kids.png";
import descargaImg from "../img/descarga.png";

const Home = () => {
    // Contenido para preguntas frecuentes
    const faqs = [
        {
            title: "Faq #1",
            content: "Vestibulum sodales enim et ligula efficitur, eget efficitur velit bibendum. Pellentesque ac nibh lacus. Integer massa lorem, pharetra condimentum nisi ut, dignissim aliquam augue. Proin scelerisque ultrices augue."
        },
        {
            title: "Faq #2",
            content: "Nam tempus tortor vel risus semper auctor. Pellentesque efficitur dui sit amet urna sollicitudin volutpat. Fusce quis ligula varius, ultrices mauris ut, dapibus lorem."
        },
        {
            title: "Faq #3",
            content: "Suspendisse potenti. Maecenas et lacinia orci. Praesent interdum augue nec condimentum mattis. Morbi eget dapibus est."
        }
    ]

    return (
        <>
            <div className="fullHeiight">
                <Header id="0" precio="9,99" />
                <Banner id="1" flex="reverse" img={smarttvImg} title="Morbi vitae neque sed ipsum" txt="Eleifend luctus sed eu arcu. Suspendisse potenti. In ante quam, consectetur sagittis suscipit ac, facilisis eu orci" />
                <Banner id="2" img={devicesImg} title="Nam tempus tortor vel risus semper auctor" txt="Pellentesque efficitur dui sit amet urna sollicitudin volutpat. Fusce quis ligula varius, ultrices mauris ut, dapibus lorem." />
                <Banner id="3" flex="reverse" img={kidsImg} title="Mauris ornare massa sed justo" txt="Ut elementum accumsan tempor. Cras a justo bibendum, ultrices tortor eget, viverra justo. Vestibulum pellentesque at sem nec maximus." />
                <Banner id="3" img={descargaImg} title="Download" txt="Fusce eleifend ipsum in rutrum pellentesque. Nullam id metus cursus, dapibus quam quis, lobortis arcu. Nam vulputate eleifend enim at aliquam." />
                <Faq faqs={faqs} />
                <Footer />
            </div>
            <hr />
        </>

    );
}

export default Home;