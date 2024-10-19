import React from 'react'
import purabateria from "../assets/purabateria.png";
import instcam from "../assets/institutocambridge.png";
import tac from "../assets/tac.png";
import goller from "../assets/goller.png";
import colimatours from "../assets/colimatours.png";
import ford from "../assets/ford.png";
import porter from "../assets/porter.png";
import jac from "../assets/jac.png";
import liverpool from "../assets/liverpool.png";
import revistawow from "../assets/revistawow.png";
import santamaria from "../assets/santamaria.png";
import contrafuego from "../assets/contrafuego.png";
import consorcio from "../assets/consorcio.png";
import firestone from "../assets/firestone.png";
import '../css/Marcas.css'

function Marcas() {
    return (
        <>
            <div className="marcas">
                <h2 className="antonioNav fondot">MARCAS QUE HAN CONFIADO EN NOSOTROS</h2>
                <div className="linea"></div>
                <div className="marcas-container">
                    <div className="marca imgPB">
                        <img src={purabateria} alt="Pura Bateria" />
                    </div>
                    <div className="marca imgIC">
                        <img src={instcam} alt="Instituto Cambrige" />
                    </div>
                    <div className="marca imgTC">
                        <img src={tac} alt="Tomografía Axial de Colima" />
                    </div>
                    <div className="marca imgGR">
                        <img src={goller} alt="Goller" />
                    </div>
                    <div className="marca imgCT">
                        <img src={colimatours} alt="Colima Tours" />
                    </div>
                    <div className="marca imgFD">
                        <img src={ford} alt="Ford" />
                    </div>
                    <div className="marca imgP">
                        <img src={porter} alt="Porter" />
                    </div>
                    <div className="marca imgJC">
                        <img src={jac} alt="Jac" />
                    </div>
                    <div className="marca imgP">
                        <img src={liverpool} alt="Liverpool" />
                    </div>
                    <div className="marca imgP">
                        <img src={revistawow} alt="Revista Wow" />
                    </div>
                    <div className="marca imgP">
                        <img src={santamaria} alt="Santa María" />
                    </div>
                    <div className="marca imgP">
                        <img src={contrafuego} alt="Contrafuego" />
                    </div>
                    <div className="marca imgP">
                        <img src={consorcio} alt="Consorcio" />
                    </div>
                    <div className="marca imgPB">
                        <img src={firestone} alt="Firestone" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marcas