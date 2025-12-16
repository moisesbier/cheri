import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Aulas de Francês Particulares Online (e Presenciais na Região de
              Novo Hamburgo)
            </h1>
            <p className="hero-description">
              Domine o idioma francês com aulas personalizadas, flexíveis e
              eficazes. Com o professor Maurício Schneider, desenvolva sua
              fluência no conforto da sua casa.
            </p>
            <div className="hero-buttons">
              <a
                href="https://wa.me/5551984587688"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Agendar Aula Experimental Gratuita
              </a>
              <a href="#sobre" className="btn btn-secondary">
                Conheça Mais
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">Material</div>
                <div className="stat-label">Gratuito</div>
              </div>
              <div className="stat">
                <div className="stat-number">Flexível</div>
                <div className="stat-label">Horários</div>
              </div>
              <div className="stat">
                <div className="stat-number">Personalizado</div>
                <div className="stat-label">Método</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-card">
              <div className="card-content">
                <div className="card-icon">📚</div>
                <h3>Aulas Interativas</h3>
                <p>
                  Material didático, moderno e gratuito disponibilizado ao aluno
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="var(--bg-light)"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
