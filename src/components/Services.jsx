import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🗣️',
      title: 'Conversação',
      description: 'Pratique sua fala e desenvolva fluência através de diálogos temáticos e situações do dia a dia.'
    },
    {
      icon: '📖',
      title: 'Gramática',
      description: 'Domine as regras gramaticais de forma clara e prática, com exercícios contextualizados.'
    },
    {
      icon: '📝',
      title: 'Preparação para Exames',
      description: 'Prepare-se para DELF, DALF, TCF e outros exames oficiais com material específico e simulados.'
    },
    {
      icon: '💼',
      title: 'Francês para Negócios',
      description: 'Aprenda o francês corporativo necessário para reuniões, apresentações e comunicação profissional.'
    },
    {
      icon: '🎯',
      title: 'Aulas para Iniciantes',
      description: 'Comece do zero com uma base sólida, aprendendo pronúncia, vocabulário essencial e estruturas básicas.'
    },
    {
      icon: '🎨',
      title: 'Cultura Francesa',
      description: 'Conheça a rica cultura francesa através da literatura, cinema, música e tradições.'
    }
  ]

  return (
    <section id="servicos" className="section services">
      <div className="container">
        <h2 className="section-title">Serviços Oferecidos</h2>
        <p className="section-subtitle">
          Aulas personalizadas para todos os níveis e objetivos
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

