import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="sobre" className="section about">
      <div className="container">
        <h2 className="section-title">Sobre o Professor</h2>
        <p className="section-subtitle">
          Conheça Maurício Schneider - Experiência e dedicação para o seu
          aprendizado
        </p>
        <div className="about-content">
          <div className="about-text">
            <div className="about-item">
              <div className="about-icon">🌍</div>
              <h3>Experiência Internacional</h3>
              <p>
                Vivência em países francófonos, proporcionando um ensino
                autêntico e contextualizado da língua e cultura francesa.
              </p>
            </div>
            <div className="about-item">
              <div className="about-icon">💡</div>
              <h3>Metodologia Personalizada</h3>
              <p>
                Cada aluno é único. Desenvolvo um plano de estudos adaptado às
                suas necessidades, objetivos e ritmo de aprendizado.
              </p>
            </div>
            <div className="about-item">
              <div className="about-icon">📱</div>
              <h3>Aulas Online</h3>
              <p>
                Utilizo as melhores plataformas e recursos digitais para tornar
                as aulas dinâmicas, interativas e eficazes.
              </p>
            </div>
          </div>
          <div className="about-image">
            <div className="about-card">
              <div className="card-header">
                <h3>Por que escolher aulas particulares?</h3>
              </div>
              <ul className="benefits-list">
                <li>✓ Atenção 100% focada em você</li>
                <li>✓ Horários flexíveis</li>
                <li>✓ Progresso acelerado</li>
                <li>✓ Foco nas suas dificuldades</li>
                <li>✓ Ambiente confortável</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
