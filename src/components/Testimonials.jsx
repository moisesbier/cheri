import React from "react";
import "./Testimonials.css";
// Importar os vídeos
import video1 from "../testimonials/depoimento-aluno-1.mp4";
import video2 from "../testimonials/depoimento-aluno-2.mp4";
import video3 from "../testimonials/depoimento-aluno-3.mp4";

const Testimonials = () => {
  const testimonials = [
    {
      type: "text",
      name: "Fernando S. Kowalsky",
      role: "Estudante",
      text: "As aulas particulares transformaram meu aprendizado! Em 3 meses já consigo me comunicar em francês com confiança. O professor é muito paciente e didático.",
      rating: 5,
    },
    {
      type: "text",
      name: "Moisés F. Bier",
      role: "Profissional",
      text: "Precisava do francês para uma oportunidade de trabalho. As aulas foram essenciais para eu conseguir a vaga. Recomendo muito!",
      rating: 5,
    },
    {
      type: "text",
      name: "Sophia T. Silva",
      role: "Preparação para DELF",
      text: "Passei no DELF B2 graças às aulas! O método personalizado e o foco nas minhas dificuldades fizeram toda a diferença.",
      rating: 5,
    },
    {
      type: "video",
      videoSrc: video1,
      title: "Depoimento de Aluno 1",
    },
    {
      type: "video",
      videoSrc: video2,
      title: "Depoimento de Aluno 2",
    },
    {
      type: "video",
      videoSrc: video3,
      title: "Depoimento de Aluno 3",
    },
  ];

  return (
    <section id="depoimentos" className="section testimonials">
      <div className="container">
        <h2 className="section-title">O que Dizem os Alunos</h2>
        <p className="section-subtitle">
          Depoimentos de quem já está aprendendo francês comigo
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {testimonial.type === "video" ? (
                <div className="video-wrapper">
                  <video
                    src={testimonial.videoSrc}
                    controls
                    playsInline
                    className="testimonial-video-player"
                  >
                    Seu navegador não suporta a tag de vídeo.
                  </video>
                </div>
              ) : (
                <>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="author-info">
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-role">{testimonial.role}</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
