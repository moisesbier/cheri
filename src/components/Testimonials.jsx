import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Fernando S. Kowalsky',
      role: 'Estudante',
      text: 'As aulas particulares transformaram meu aprendizado! Em 3 meses já consigo me comunicar em francês com confiança. O professor é muito paciente e didático.',
      rating: 5
    },
    {
      name: 'Moisés F. Bier',
      role: 'Profissional',
      text: 'Precisava do francês para uma oportunidade de trabalho. As aulas foram essenciais para eu conseguir a vaga. Recomendo muito!',
      rating: 5
    },
    {
      name: 'Sophia T. Silva',
      role: 'Preparação para DELF',
      text: 'Passei no DELF B2 graças às aulas! O método personalizado e o foco nas minhas dificuldades fizeram toda a diferença.',
      rating: 5
    }
  ]

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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

