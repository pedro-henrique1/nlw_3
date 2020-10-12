import React from "react";

import logoImg from "../images/Logo.svg";
import { FiArrowRight } from "react-icons/fi";
import "../styles/pages/landing.css";

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="happy" />
        <main>
          <h1>Leve a felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Liberdade</strong>
          <span>Minas gerais</span>
        </div>
        <a href="https://google.com" className="enterApp">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </a>
      </div>
    </div>
  );
}

export default Landing;
