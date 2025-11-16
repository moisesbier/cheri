import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🇫🇷</span>
              <span className="logo-text">Maurício Schneider</span>
            </div>
            <p>
              Aprenda francês com o professor Maurício Schneider. Aulas
              particulares online personalizadas e eficazes.
            </p>
          </div>
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li>
                <a href="#inicio">Início</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#servicos">Serviços</a>
              </li>
              <li>
                <a href="#depoimentos">Depoimentos</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contato</h4>
            <ul>
              <li>📧 universoatoa@hotmail.com</li>
              <li>📱 +55 (51) 98458-7688</li>
              <li>📷 @mauricio.schneider1</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Maurício Schneider. Todos os
            direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="back-to-top"
            aria-label="Voltar ao topo"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
